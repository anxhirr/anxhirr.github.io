import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hangmanActions } from '../../store/Hangman-slice'

const KEYS = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'empty-space',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'empty-space',
  'empty-space',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  'Next',
]

const HangmanKeyboard = (props) => {
  const { hasLost, hasWon, incorrectLetters, correctLetters, handleNewGame } =
    props
  const dispatch = useDispatch()
  const {
    guessedLetters,
    keyHint,
    lifes,
    showSettingOptionsModal,
    score,
    showConfirmModal,
  } = useSelector((state) => state.hangman)
  // console.log(guessedLetters)

  const addGuessedLetter = useCallback(
    (pressedKey) => {
      if (hasLost || hasWon) return
      dispatch(hangmanActions.addGuessedLetter(pressedKey))
    },
    [dispatch, hasLost, hasWon]
  )

  const handleNextWord = useCallback(() => {
    // confirm modal logic
    if (!hasLost && !hasWon) {
      if (guessedLetters.length > 0 || score > 0) {
        dispatch(hangmanActions.setShowConfirmModal(true))
        dispatch(
          hangmanActions.setConfirmModalText(
            'You will loose 1 life! Are you sure you want to procced?'
          )
        )
        return
      }
    }
    // end confirm modal logic

    if (hasWon) dispatch(hangmanActions.addScore())

    if (!hasWon || hasLost) dispatch(hangmanActions.decreaseLife())

    dispatch(hangmanActions.updateToGuessWord())
    dispatch(hangmanActions.resetGuessedLetters())
    dispatch(hangmanActions.resetRemainingTime())
    dispatch(hangmanActions.resetKeyHint())
  }, [dispatch, hasLost, hasWon, guessedLetters.length, score])

  useEffect(() => {
    if (showSettingOptionsModal || showConfirmModal) return
    const handleKeyPress = (e) => {
      const pressedKey = e.key

      if (guessedLetters.includes(pressedKey)) return
      if (pressedKey.match(/^[a-zA-Z]$/)) {
        addGuessedLetter(pressedKey)
      }

      if (pressedKey === 'Enter') {
        if (lifes === 0) handleNewGame()
        if (lifes > 0) handleNextWord()
      }
    }
    document.addEventListener('keypress', handleKeyPress)
    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [
    addGuessedLetter,
    dispatch,
    guessedLetters,
    handleNewGame,
    handleNextWord,
    lifes,
    showSettingOptionsModal,
    showConfirmModal,
  ])

  return (
    <div className='hangman-keyboard'>
      {KEYS.map((key, index) => {
        const isWrong = incorrectLetters.includes(key)
        const isCorrect = correctLetters.includes(key)
        const isKeyDisabled =
          hasLost || hasWon || lifes === 0 || isWrong || isCorrect
        const isNextKeyDisabled = lifes === 0
        let shouldShowHint = keyHint === key
        if (isCorrect) shouldShowHint = false

        if (key === 'Next') {
          return (
            <button
              key={key}
              onClick={() => handleNextWord()}
              className={`hangman-keyboard__key  hangman-keyboard__key--next-word ${
                isKeyDisabled && lifes > 0 ? 'hangman-keyboard__key--pulse' : ''
              } ${shouldShowHint ? 'hangman-keyboard__key--hint' : ''} ${
                isNextKeyDisabled ? 'hangman-keyboard__key--no-hover' : ''
              }`}
              disabled={isNextKeyDisabled}
            >
              {key}
            </button>
          )
        }

        if (key === 'empty-space') return <div key={index}></div>

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            className={`hangman-keyboard__key ${
              isWrong ? 'hangman-keyboard__key--wrong' : ''
            } ${isKeyDisabled ? 'hangman-keyboard__key--no-hover' : ''} ${
              isCorrect ? 'hangman-keyboard__key--correct' : ''
            } ${
              shouldShowHint && !hasLost ? 'hangman-keyboard__key--hint' : ''
            } `}
            disabled={isKeyDisabled}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default HangmanKeyboard
