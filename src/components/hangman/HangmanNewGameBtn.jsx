import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hangmanActions } from '../../store/Hangman-slice'

const HangmanNewGameBtn = ({ hasLost, startNewGame }) => {
  const dispatch = useDispatch()
  const { score, lifes } = useSelector((state) => state.hangman)

  const handleNewGame = () => {
    if (score > 0 && !hasLost) {
      dispatch(hangmanActions.setShowConfirmModal(true))
      dispatch(
        hangmanActions.setConfirmModalText(
          'Are you sure you want to start a new game? Your score will be reset.'
        )
      )
      return
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
