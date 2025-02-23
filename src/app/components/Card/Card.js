import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{card.title}</h2>
      </div>
      <div className="card-body">
        <p>{card.body}</p>
      </div>
      <div className="card-footer">
        <span>{new Date(card.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default Card;