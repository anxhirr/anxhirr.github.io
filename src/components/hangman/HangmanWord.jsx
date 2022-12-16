import React from 'react'

const HangmanWord = (props) => {
  const { guessedLetters, hasLost, hasWon, toGuessWord } = props

  return (
    <div className='hangman-word'>
      {toGuessWord.split('').map((letter, index) => {
        const revealCSS = guessedLetters.includes(letter) || hasLost
        const colorCSS = !guessedLetters.includes(letter) && hasLost

        return (
          <span key={index} className='hangman-word__letter-box'>
            &nbsp;
            <span
              key={index}
              className={`hangman-word__letter ${
                revealCSS
                  ? 'hangman-word__letter--visible'
                  : 'hangman-word__letter--hidden'
              } ${
                colorCSS
                  ? 'hangman-word__letter--red'
                  : 'hangman-word__letter--black'
              } ${hasWon ? 'hangman-word__letter--winner' : ''}`}
            >
              {letter}
            </span>
          </span>
        )
      })}
    </div>
  )
}

export default HangmanWord
