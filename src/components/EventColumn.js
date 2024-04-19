import React from 'react';
import { useDispatch } from 'react-redux';

function EventColumn({ category, events, onEventSelect }) {
  const dispatch = useDispatch();

  const toggleFavorite = event => {
    dispatch({
      type: event.isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
      payload: event
    });
  };

  return (
    <div className="event-column">
      <h2>{category}</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <span className="column-event" onClick={() => onEventSelect(event)}>{event.name}</span>
            <button onClick={() => toggleFavorite(event)}>
              {event.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventColumn;