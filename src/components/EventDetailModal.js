import React from 'react';

function EventDetailModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default EventDetailModal;