# Netflix GPT
- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying the app to production
- Create Sign Up User Account
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented Sign Out
- BUG FIX: SignUp user displayName and profile picture udpate
- BUG FIX: If the user is not logged in redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback in Header Component
- Add hardcoded (constants) values to constants file
- Register TMDB API & create an app & get access token
- GET data from TMDB now playing movies list API
- Create custom hooks for Now Playing Movies
- Create movie slice 
- Update Store with movies data
- Planning for main & secondary container
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the youtube video and make it autoplay and mute
- Tailwind classed to make main container look awesome
- Build secondary component
- Integrated browse page with Movie list & cards of 'Popular', 'Top Rated', & 'Upcoming' movies

# Features
- Login/Signup Page
  - Sign In / Sign Up Form
  - redirect to Browse Page
- Browse Page (only after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title and Description
    - Movie Suggestions
      - Movie Lists * n times
- NetflixGPT
  - Search Bar
  - Movie Suggestions