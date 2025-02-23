import React from 'react';
import Card from '../Card/Card';

const CardList = ({ cards }) => {
  return (
    <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
