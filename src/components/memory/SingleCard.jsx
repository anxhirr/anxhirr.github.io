import React from 'react';

const SingleCard = ({ card, handleChoice, shown, disabled }) => {
  const handleClick = () => {
    if (disabled) return;
    console.log('disabled', disabled);
    handleChoice(card);
  };

  return (
    <div className='card-game__card' onClick={handleClick}>
      {shown ? card.number : 'X'}
    </div>
  );
};

export default SingleCard;
