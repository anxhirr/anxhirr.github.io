import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInterval from '../../../hooks/useInterval'
import { hangmanActions } from '../../../store/Hangman-slice'

const HangmanTime = ({ hasLost, hasWon }) => {
  const dispatch = useDispatch()
  const { remainingTime, lifes, toGuessWord, guessedLetters } = useSelector(
    (state) => state.hangman
  )

  let shouldPulse = remainingTime <= 3
  if (remainingTime === 0 || hasLost || hasWon) shouldPulse = false

  const shouldHide = remainingTime === 0 || lifes === 0 || hasWon

  const handleTimeOut = useCallback(() => {
    if (lifes === 0) return

    const unFoundLetters = toGuessWord
      .split('')
      .filter((letter) => !guessedLetters.includes(letter))

    const hintKey =
      unFoundLetters[Math.floor(Math.random() * unFoundLetters.length)]

    dispatch(hangmanActions.setKeyHint(hintKey))
  }, [dispatch, guessedLetters, lifes, toGuessWord])

  // useInterval(
  //   () => {
  //     console.log(remainingTime)
  //     if (remainingTime === 0) handleTimeOut()

  //     dispatch(hangmanActions.decreaseRemainingTime())
  //   },
  //   remainingTime === 0 || hasLost || hasWon ? null : 1000
  // )

  useEffect(() => {
    if (hasLost || hasWon) return
    if (remainingTime === 0) {
      return handleTimeOut()
    }
    const updateTimeInterval = setInterval(() => {
      dispatch(hangmanActions.decreaseRemainingTime())
    }, 1000)

    return () => {
      clearInterval(updateTimeInterval)
    }
  }, [hasLost, remainingTime])

  return (
    <div
      className={`hangman-dashboard__hint ${
        shouldPulse ? 'hangman-dashboard__hint--pulse' : ''
      } ${
        shouldHide
          ? 'hangman-dashboard__hint--hidden'
          : 'hangman-dashboard__hint--visible'
      }`}
    >
      <span>Hint after:</span>
      <span>{remainingTime}</span>
    </div>
  )
}

export default HangmanTime
