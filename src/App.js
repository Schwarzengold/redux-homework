// src/components/App.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EventColumn from './components/EventColumn';
import EventDetailModal from './components/EventDetailModal';
import FavoriteListModal from './components/FavoriteListModal';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const favorites = useSelector(state => state.favorites);

  const categories = {
    Concerts: [
      { id: 1, name: 'Rock Concert', description: 'Enjoy a night of hard rock music with top bands from around the country.', date: '2024-04-30', location: 'Downtown Arena', isFavorite: favorites.some(fav => fav.id === 1) },
      { id: 2, name: 'Jazz Festival', description: 'Smooth jazz from world-renowned musicians in a cozy outdoor setting.', date: '2024-05-15', location: 'Riverside Park', isFavorite: favorites.some(fav => fav.id === 2) },
      { id: 7, name: 'Electronic Music Bash', description: 'Dance the night away with leading electronic music DJs.', date: '2024-07-22', location: 'Beachside Club', isFavorite: favorites.some(fav => fav.id === 7) },
      { id: 8, name: 'Classical Music Evening', description: 'A serene evening of classical music compositions from the greats.', date: '2024-08-18', location: 'City Concert Hall', isFavorite: favorites.some(fav => fav.id === 8) }
    ],
    Movies: [
      { id: 3, name: 'Comedy Movie Night', description: 'Laugh out loud with the latest comedy hits.', date: '2024-04-25', location: 'Main Street Cinema', isFavorite: favorites.some(fav => fav.id === 3) },
      { id: 4, name: 'Sci-Fi Marathon', description: 'A full day marathon of classic and new sci-fi movies.', date: '2024-05-04', location: 'Orbit Theater', isFavorite: favorites.some(fav => fav.id === 4) },
      { id: 9, name: 'Horror Film Fest', description: 'Scare yourself silly at the annual horror film festival.', date: '2024-09-13', location: 'Downtown Cinema', isFavorite: favorites.some(fav => fav.id === 9) },
      { id: 10, name: 'Documentary Series', description: 'Explore intriguing worlds through award-winning documentaries.', date: '2024-10-05', location: 'Cultural Center', isFavorite: favorites.some(fav => fav.id === 10) }
    ],
    Theater: [
      { id: 5, name: 'Shakespeare in the Park', description: 'A summer tradition, featuring Macbeth and Romeo and Juliet.', date: '2024-06-01', location: 'City Park Theater', isFavorite: favorites.some(fav => fav.id === 5) },
      { id: 6, name: 'Modern Performance', description: 'Innovative dance performances by contemporary artists.', date: '2024-06-20', location: 'Cultural Arts Center', isFavorite: favorites.some(fav => fav.id === 6) },
      { id: 11, name: 'Musical Extravaganza', description: 'A delightful evening of Broadway hits and new musical adventures.', date: '2024-07-04', location: 'Grand Theater', isFavorite: favorites.some(fav => fav.id === 11) },
      { id: 12, name: 'Experimental Theater Night', description: 'Experience cutting-edge theater productions that push boundaries.', date: '2024-08-11', location: 'Underground Arts Venue', isFavorite: favorites.some(fav => fav.id === 12) }
    ]
  };

  const handleEventSelect = event => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="app">
      <header>
        <h1>Local Events</h1>
        <button className="button1" onClick={toggleFavorites}>
          {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
        </button>
      </header>
      {showFavorites && <FavoriteListModal favorites={favorites} onClose={toggleFavorites} />}
      <div className="event-columns">
        {Object.keys(categories).map(category => (
          <EventColumn
            key={category}
            category={category}
            events={categories[category]}
            onEventSelect={handleEventSelect}
          />
        ))}
      </div>
      {selectedEvent && <EventDetailModal event={selectedEvent} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
