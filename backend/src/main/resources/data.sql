-- Insert sample movies
INSERT INTO movies (movie_id, title, genre, lang, duration) VALUES
(1, 'Inception', 'Sci-Fi', 'English', 148),
(2, 'The Dark Knight', 'Action', 'English', 152),
(3, 'Interstellar', 'Sci-Fi', 'English', 169),
(4, 'Dunkirk', 'War', 'English', 106),
(5, 'Avatar', 'Sci-Fi', 'English', 162);

-- Insert sample theaters
INSERT INTO theaters (theater_id, name, city) VALUES
(1, 'PVR Cinemas', 'Mumbai'),
(2, 'INOX Theater', 'Delhi'),
(3, 'Cinepolis', 'Bangalore'),
(4, 'Carnival Cinemas', 'Pune'),
(5, 'Miraj Cinemas', 'Hyderabad');

-- Insert sample shows
INSERT INTO shows (show_id, movie_id, theater_id, timing, available_seats) VALUES
(1, 1, 1, '10:00 AM', 50),
(2, 1, 1, '02:00 PM', 50),
(3, 1, 1, '06:00 PM', 50),
(4, 2, 2, '11:00 AM', 50),
(5, 2, 2, '03:00 PM', 50),
(6, 2, 2, '07:00 PM', 50),
(7, 3, 3, '09:30 AM', 50),
(8, 3, 3, '01:30 PM', 50),
(9, 3, 3, '05:30 PM', 50),
(10, 4, 4, '10:30 AM', 50),
(11, 4, 4, '02:30 PM', 50),
(12, 4, 4, '06:30 PM', 50),
(13, 5, 5, '11:30 AM', 50),
(14, 5, 5, '03:30 PM', 50),
(15, 5, 5, '07:30 PM', 50);

-- Insert sample users
INSERT INTO users (user_id, name, email, phone) VALUES
(1, 'John Doe', 'john@example.com', '9876543210'),
(2, 'Jane Smith', 'jane@example.com', '9876543211');

-- Insert sample seats for show 1
INSERT INTO seat (seat_id, show_id, seat_number, is_booked) VALUES
(1, 1, 'A1', false),
(2, 1, 'A2', false),
(3, 1, 'A3', false),
(4, 1, 'B1', false),
(5, 1, 'B2', false);
