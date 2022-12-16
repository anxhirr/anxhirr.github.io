import React from 'react'
import { useDispatch } from 'react-redux'
import { hangmanActions } from '../../store/Hangman-slice'

const HangmanNewGameBtn = ({ hasLost, startNewGame, score, lifes }) => {
  const dispatch = useDispatch()

  const handleNewGame = () => {
    if (score > 0 && !hasLost) {
      return dispatch(hangmanActions.setShowConfirmModal(true))
    }
    startNewGame()
  }

  return (
    <div className='hangman-new-game'>
      <button
        onClick={() => {
          handleNewGame()
        }}
        className={`hangman-keyboard__key hangman-keyboard__key--new-game ${
          lifes === 0 ? 'hangman-keyboard__key--pulse' : ''
        }`}
      >
        New Game
      </button>
    </div>
  )
}

export default HangmanNewGameBtn
