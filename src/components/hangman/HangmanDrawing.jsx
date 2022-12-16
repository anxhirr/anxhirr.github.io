import React from 'react'

export const PARTS = [
  <div className='hangman-drawing__right' key={1} />,
  <div className='hangman-drawing__down' key={2} />,
  <div className='hangman-drawing__head' key={3} />,
  <div className='hangman-drawing__body' key={4} />,
  <div className='hangman-drawing__left-arm' key={5} />,
  <div className='hangman-drawing__right-arm' key={6} />,
  <div className='hangman-drawing__left-leg' key={7} />,
  <div className='hangman-drawing__right-leg' key={8} />,
]

const HangmanDrawing = ({ incorrectLetters, hasLost }) => {
  return (
    <>
      <div
        className={`hangman-drawing ${hasLost ? 'hangman-drawing--shake' : ''}`}
      >
        {PARTS.slice(0, incorrectLetters.length)}
        <div className={`hangman-drawing__stand `} />
        <div className='hangman-drawing__ground' />
      </div>
    </>
  )
}

export default HangmanDrawing
