// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import TopRatedPage from './TopRatedPage';
import UpcomingPage from './UpcomingPage';
import SingleMovieDetailPage from './SingleMovieDetailPage';
import SearchedMoviePage from './SearchedMoviePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/homepage" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<SingleMovieDetailPage />} />
          <Route path="/search/:query" element={<SearchedMoviePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;