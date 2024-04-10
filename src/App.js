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
          <Route exact path="/" component={HomePage} />
          <Route path="/top-rated" component={TopRatedPage} />
          <Route path="/upcoming" component={UpcomingPage} />
          <Route path="/movie/:id" component={SingleMovieDetailPage} />
          <Route path="/search/:query" component={SearchedMoviePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
