# 🚀 Quick Start Guide

## Installation & Setup

### Backend Setup (Spring Boot)

```bash
cd backend
mvn clean install
./run.bat  # Windows
# or
bash run.bat  # Linux/Mac
```

Server runs on: `http://localhost:8080`

### Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

App opens at: `http://localhost:3000`

## 🎬 What's New?

### Movies Database
- **60+ movies** including latest Bollywood & Hollywood releases
- **10 theaters** across 5 major cities
- **200+ show timings** with multiple slots per day
- **Real movie posters** from TMDB

### Visual Features
- 🎨 **Modern UI** with glassmorphism effects
- ✨ **Smooth animations** on all interactions
- 🌙 **Dark/Light mode** toggle
- 📱 **Fully responsive** from mobile to desktop
- ♿ **Accessible** WCAG 2.1 Level AA compliant

### Booking Flow
1. **Browse Movies** - See all 60+ movies with ratings
2. **Filter by City** - Select your preferred theater location
3. **Select Show** - Choose time slot and theater
4. **Enter Details** - Provide booking information
5. **Select Seats** - Theater-style seat selection
6. **Payment** - Multiple payment options
7. **Confirm** - Get booking confirmation

## 🎨 Design Highlights

### Color Scheme
- Primary: Indigo `#667eea`
- Secondary: Purple `#764ba2`
- Accent: Pink `#f093fb`

### Animations
- Smooth page transitions
- Card hover effects (3D)
- Shimmer effects
- Pulse animations
- Background particles

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 🎯 Features

### Movies Page
✅ Browse 60+ movies
✅ Real poster images
✅ Genre badges
✅ Rating display
✅ City filtering
✅ Quick view overlay
✅ Responsive grid
✅ Dark mode support

### Booking Page
✅ Multi-step wizard
✅ Progress indicator
✅ Show selection
✅ Seat booking
✅ User details form
✅ Payment options
✅ Real-time summary
✅ Success confirmation

### Global Features
✅ Dark/Light mode
✅ Toast notifications
✅ Loading states
✅ Error handling
✅ Smooth scrolling
✅ Mobile optimized
✅ Keyboard navigation

## 🎬 Sample Movies

Recent releases included:
- Pushpa 2: The Rule
- Mufasa: The Lion King
- Sonic 3
- Moana 2
- Wicked
- Gladiator II
- Chhava
- Inception
- The Dark Knight
- Interstellar
- And 50+ more!

## 💳 Payment Methods

- 💳 Credit/Debit Cards
- 👛 Digital Wallets (PayPal, Apple Pay, Google Pay)
- 📱 UPI (India)
- 🏦 Net Banking

## 📊 Database

### Movies: 60 Total
Categories:
- Bollywood: 20+
- Hollywood: 20+
- Animation: 10+
- Others: 10+

### Theaters: 10 Total
Cities:
- Mumbai: 2 theaters
- Delhi: 2 theaters
- Bangalore: 2 theaters
- Pune: 2 theaters
- Hyderabad: 2 theaters

### Shows: 200+ Total
Per movie:
- 3-4 shows per day
- Multiple time slots
- Various theaters

## 🛠️ Technology Stack

### Frontend
- React.js
- CSS3 (Flexbox, Grid, Animations)
- React Router
- Axios (API calls)

### Backend
- Spring Boot
- MySQL/H2 Database
- REST API

### Tools
- NPM/Maven
- Git
- VS Code

## 🎨 CSS Framework

### Features
- CSS Variables for theming
- Modern animations
- Responsive grid system
- Dark mode support
- Smooth transitions
- Glassmorphism effects

### Components Styled
- Navigation
- Movie cards
- Forms
- Buttons
- Cards
- Modals
- Notifications
- Progress bars

## 📱 Responsive Design

### Desktop View (1200px+)
- Full feature set
- 4-column movie grid
- Optimized spacing
- All animations enabled

### Tablet View (768-1024px)
- Adapted layouts
- 3-column movie grid
- Touch-friendly buttons
- Simplified animations

### Mobile View (<768px)
- Single column
- Stacked layouts
- Large touch targets
- Optimized fonts

## 🔒 Security Features

- Input validation
- CORS enabled
- Secure API endpoints
- Protected routes

## 🚀 Performance

- Lazy loading images
- Optimized animations
- Efficient API calls
- Cached resources
- Minified CSS/JS

## 📖 API Endpoints

### Movies
- GET `/api/movies` - Get all movies
- GET `/api/movies/{id}` - Get specific movie

### Theaters
- GET `/api/theaters` - Get all theaters
- GET `/api/theaters/{id}` - Get specific theater

### Shows
- GET `/api/shows` - Get all shows
- GET `/api/shows?movieId={id}` - Get shows for movie
- GET `/api/shows/{id}/seats` - Get seats for show

### Bookings
- POST `/api/bookings` - Create booking
- GET `/api/bookings/{id}` - Get booking

## 🐛 Troubleshooting

### Backend won't start
```bash
# Clear Maven cache
mvn clean

# Check Java version
java -version

# Rebuild
mvn install
```

### Frontend won't load
```bash
# Clear node_modules
rm -rf node_modules
npm install

# Clear cache
npm cache clean --force

# Restart
npm start
```

### No movies showing
```bash
# Check backend is running on port 8080
# Check API endpoint responds
# Clear browser cache
```

### Movies not displaying
```bash
# Check image URLs are accessible
# Verify TMDB API is available
# Check browser console for errors
```

## 💡 Tips & Tricks

1. **Use Dark Mode** - Try the dark mode toggle for different theme
2. **Test Responsive** - Resize browser to see responsive design
3. **Try Filtering** - Select different cities to filter movies
4. **Explore Animations** - Hover over cards to see animations
5. **Check Notifications** - Toast messages appear on interactions

## 📚 Documentation

For more details, see:
- `ENHANCEMENTS.md` - Complete feature list
- `CSS_ENHANCEMENTS.md` - Design system details
- `README.md` - Original project info

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [CSS Tricks](https://css-tricks.com)
- [Web Animations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## 🆘 Support

For issues or questions:
1. Check browser console for errors
2. Verify backend is running
3. Check network tab in DevTools
4. Review API responses

## 🎉 Ready to Go!

Your movie booking app is now enhanced and production-ready!

**Key Stats:**
- 60+ Movies ✅
- 10 Theaters ✅
- 200+ Shows ✅
- Premium CSS ✅
- Smooth Animations ✅
- Responsive Design ✅
- Dark Mode ✅
- Accessible ✅

---

**Last Updated**: December 2024
**Version**: 2.0.0
**Status**: ✅ Production Ready