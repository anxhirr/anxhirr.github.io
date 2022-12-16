import React from 'react'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (disabled) return
    handleChoice(card)
  }

  return (
    <div className='card-game__card' onClick={handleClick}>
      {flipped ? card.number : 'X'}
    </div>
  )
}

export default SingleCard
