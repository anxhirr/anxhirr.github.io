import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hangmanActions } from '../../store/Hangman-slice'

import HangManDashboard from './dashboard/HangManDashboard'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import HangmanKeyboard from './HangmanKeyboard'
import ConfirmModal from './modal/ConfirmModal'
import { PARTS } from './HangmanDrawing'
import HangmanSettings from './HangmanSettings'
import HangmanNewGameBtn from './HangmanNewGameBtn'

const TRIES__LEFT = PARTS.length

const Hangman = () => {
  const dispatch = useDispatch()
  const {
    toGuessWord,
    guessedLetters,
    score,
    highestScore,
    lifes,
    signInUserName,
    showConfirmModal,
  } = useSelector((state) => state.hangman)

  const incorrectLetters = guessedLetters.filter(
    (letter) => !toGuessWord.includes(letter)
  )
  const correctLetters = guessedLetters.filter((letter) =>
    toGuessWord.includes(letter)
  )

  const hasLost = incorrectLetters.length >= TRIES__LEFT
  const hasWon = toGuessWord.split('').every((l) => guessedLetters.includes(l))

  const generalUpdate = useCallback(() => {
    dispatch(hangmanActions.updateToGuessWord())
    dispatch(hangmanActions.resetGuessedLetters())
    dispatch(hangmanActions.resetRemainingTime())
    dispatch(hangmanActions.resetKeyHint())
  }, [dispatch])

  const startNewGame = useCallback(() => {
    generalUpdate()

    dispatch(hangmanActions.resetLifes())
    dispatch(hangmanActions.resetScore())
    if (score > highestScore) dispatch(hangmanActions.setHighestScore(score))
  }, [dispatch, highestScore, score, generalUpdate])

  useEffect(() => {
    if (lifes === 0) {
      dispatch(hangmanActions.setShowConfirmModal(true))

      dispatch(
        hangmanActions.setConfirmModalText(
          'You ran out of lifes, maybe try again?'
        )
      )
    }
  }, [dispatch, lifes])

  return (
    <section className='hangman'>
      <div className='hangman__content'>
        {showConfirmModal && (
          <ConfirmModal
            startNewGame={startNewGame}
            generalUpdate={generalUpdate}
          />
        )}

        {signInUserName && (
          <div className='hangman-user'>Wellcome {signInUserName}</div>
        )}
        <HangmanSettings />
        <HangManDashboard hasWon={hasWon} hasLost={hasLost} />
        <HangmanNewGameBtn hasLost={hasLost} startNewGame={startNewGame} />
        <HangmanDrawing hasLost={hasLost} incorrectLetters={incorrectLetters} />
        <HangmanWord hasLost={hasLost} hasWon={hasWon} />
        <HangmanKeyboard
          hasLost={hasLost}
          hasWon={hasWon}
          incorrectLetters={incorrectLetters}
          correctLetters={correctLetters}
        />
      </div>
    </section>
  )
}

export default Hangman
