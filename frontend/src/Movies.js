import React, { useEffect, useState } from "react";
import { getMovies, getTheaters, getShows } from "./api";
import "./Movies.css";

// TMDB API Configuration with Bearer Token
const TMDB_ACCESS_TOKEN = "7d114876c6eeaf156dd47aa9103d9e36";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);
  const [shows, setShows] = useState([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [posterCache, setPosterCache] = useState({});

  // Fetch posters when movies change
  useEffect(() => {
    if (movies.length > 0) {
      movies.forEach((movie) => {
        if (!posterCache[movie.id]) {
          // Add small delay to avoid rate limiting
          setTimeout(() => {
            fetchMoviePoster(movie.title, movie.id).then((url) => {
              setPosterCache((prev) => ({ ...prev, [movie.id]: url }));
            });
          }, Math.random() * 500);
        }
      });
    }
  }, [movies]);

  useEffect(() => {
    Promise.all([getMovies(), getTheaters(), getShows()])
      .then(([moviesRes, theatersRes, showsRes]) => {
        setAllMovies(moviesRes.data);
        setMovies(moviesRes.data);
        setTheaters(theatersRes.data);
        setShows(showsRes.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCity === "All") {
      setMovies(allMovies);
    } else {
      // Filter movies that have shows in the selected city
      const moviesInCity = shows
        .filter((show) => show.theater.city === selectedCity)
        .map((show) => show.movie.id);
      const uniqueMovieIds = [...new Set(moviesInCity)];
      const filteredMovies = allMovies.filter((movie) =>
        uniqueMovieIds.includes(movie.id)
      );
      setMovies(filteredMovies);
    }
  }, [selectedCity, allMovies, shows]);

  const cities = ["All", ...new Set(theaters.map((t) => t.city))];

  // Toast notification function
  const showToast = (message, type = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  };

  // Fetch movie poster from TMDB API using Bearer token
  const fetchMoviePoster = async (movieTitle, movieId) => {
    if (posterCache[movieId]) {
      return posterCache[movieId];
    }

    try {
      console.log(`Fetching poster for: ${movieTitle}`);
      const response = await fetch(
        `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(movieTitle)}`,
        {
          headers: {
            'Authorization': `Bearer ${TMDB_ACCESS_TOKEN}`,
            'Content-Type': 'application/json;charset=utf-8'
          }
        }
      );
      
      console.log(`Response status for ${movieTitle}:`, response.status);
      const data = await response.json();
      console.log(`Search results for ${movieTitle}:`, data);
      
      if (data.results && data.results.length > 0) {
        const movie = data.results[0];
        if (movie.poster_path) {
          const fullUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          console.log(`Found poster for ${movieTitle}:`, fullUrl);
          return fullUrl;
        }
      }
      console.log(`No poster found for ${movieTitle}, using fallback`);
    } catch (error) {
      console.error("Error fetching poster for", movieTitle, ":", error);
    }

    // Fallback to placeholder if no poster found
    return getMoviePoster(movieId, movieTitle);
  };

  // Generate movie poster URL from frontend with unique colors (fallback)
  const getMoviePoster = (movieId, title) => {
    const colors = [
      ["FF6B6B", "4ECDC4"],
      ["A8E6CF", "FFD3B6"],
      ["FF8B94", "FFAAA5"],
      ["95E1D3", "F38181"],
      ["AA96DA", "FCBAD3"],
      ["FFCCCC", "FF9999"],
      ["B2D8D8", "66B2B2"],
      ["FFA07A", "FF6347"],
      ["98D8C8", "6EC1B4"],
      ["FFB6C1", "FF69B4"],
    ];
    
    const colorIndex = movieId % colors.length;
    const [color1, color2] = colors[colorIndex];
    
    return `https://placehold.co/500x750/${color1}/${color2}?text=${encodeURIComponent(title)}&font=montserrat`;
  };

  // Generate random rating for movies (4-5 stars)
  const getMovieRating = (movieId) => {
    const ratings = [4.2, 4.5, 4.7, 4.8, 4.3, 4.6, 4.9];
    return ratings[movieId % ratings.length];
  };

  if (loading) {
    return (
      <div className={`movies-container ${darkMode ? "dark-mode" : ""}`}>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          <span className="dark-mode-toggle-icon">
            {darkMode ? "☀️" : "🌙"}
          </span>
          {darkMode ? "Light" : "Dark"} Mode
        </button>
        <div className="loading-skeleton">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton skeleton-header"></div>
              <div className="skeleton skeleton-title"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-button"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`movies-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            <span className="toast-icon">
              {toast.type === "success" && "✅"}
              {toast.type === "error" && "❌"}
              {toast.type === "info" && "ℹ️"}
            </span>
            <span className="toast-message">{toast.message}</span>
            <button
              className="toast-close"
              onClick={() =>
                setToasts((prev) => prev.filter((t) => t.id !== toast.id))
              }
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        <span className="dark-mode-toggle-icon">{darkMode ? "☀️" : "🌙"}</span>
        {darkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="header">
        <h1 className="header-title">Book Your Movie Tickets</h1>
        <p className="subtitle">
          Select your favorite movie and book instantly!
        </p>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-number">{movies.length}</span>
            <span className="stat-label">Movies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{theaters.length}</span>
            <span className="stat-label">Theaters</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{shows.length}</span>
            <span className="stat-label">Shows</span>
          </div>
        </div>
      </div>

      <div className="city-filter">
        <div className="filter-content">
          <label>Select City:</label>
          <select
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              showToast(
                `Showing movies in ${e.target.value === "All" ? "all cities" : e.target.value}`,
                "info"
              );
            }}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {movies.length === 0 ? (
        <div className="no-movies">
          <h2>No Movies Available</h2>
          <p>Check back later for new releases!</p>
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie, index) => {
            const rating = getMovieRating(movie.id);
            const posterUrl = posterCache[movie.id] || getMoviePoster(movie.id, movie.title);

            return (
              <div
                key={movie.id}
                className="movie-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="movie-poster-wrapper">
                  <img
                    src={posterUrl}
                    alt={movie.title}
                    className="movie-poster-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = getMoviePoster(movie.id, movie.title);
                    }}
                  />
                  <div className="movie-poster-overlay">
                    <button
                      className="quick-view-btn"
                      onClick={() =>
                        showToast(`${movie.title} - ${movie.genre}`, "info")
                      }
                    >
                      Quick View
                    </button>
                  </div>
                  <div className="genre-badge">{movie.genre}</div>
                  <div className="rating-badge">
                    <span className="star">★</span>
                    <span className="rating-value">{rating}</span>
                  </div>
                </div>
                <div className="movie-info">
                  <h2 className="movie-title">{movie.title}</h2>
                  <div className="movie-meta">
                    <span className="meta-item">{movie.language}</span>
                    <span className="meta-item">{movie.duration} min</span>
                  </div>
                  <div className="movie-stats">
                    <div className="stat">
                      <span className="stat-text">{movie.genre}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-text">
                        {shows.filter((s) => s.movie.id === movie.id).length}{" "}
                        Shows
                      </span>
                    </div>
                  </div>
                  <button
                    className="book-btn"
                    onClick={() => {
                      showToast(
                        `Redirecting to book ${movie.title}...`,
                        "success"
                      );
                      setTimeout(() => {
                        window.location.href = `/booking/${movie.id}?city=${selectedCity}`;
                      }, 500);
                    }}
                  >
                    <span className="btn-text">Book Tickets</span>
                    <span className="btn-icon">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Movies;
