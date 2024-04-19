
import React from 'react';

function FavoriteListModal({ favorites, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Favorites</h2>
        <ul>
          {favorites.map(fav => (
            <li key={fav.id}>{`${fav.name} - ${fav.date} at ${fav.location}`}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default FavoriteListModal;
