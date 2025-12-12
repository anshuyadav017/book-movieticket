package com.example.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movieId;

    @Column(length = 30)
    private String title;
    
    @Column(length = 30)
    private String genre;
    
    @Column(length = 30)
    private String lang;
    
    private int duration;
    
    @Column(name = "image_url", columnDefinition = "VARCHAR(1000)")
    private String imageUrl;

    public Movie() {}

    public Movie(String title, String genre, String lang, int duration, String imageUrl) {
        this.title = title;
        this.genre = genre;
        this.lang = lang;
        this.duration = duration;
        this.imageUrl = imageUrl;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
