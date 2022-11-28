import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hangmanActions } from '../../../store/Hangman-slice';

const HangmanTime = ({ hasLost }) => {
  const dispatch = useDispatch();
  const { remainingTime } = useSelector((state) => state.hangman);
  const { lifes } = useSelector((state) => state.hangman);
  const { toGuessWord } = useSelector((state) => state.hangman);
  const { guessedLetters } = useSelector((state) => state.hangman);

  let shouldPulse = remainingTime <= 3;
  if (remainingTime === 0 || hasLost) shouldPulse = false;

  const shouldHide = remainingTime === 0 || lifes === 0;

  const handleTimeOut = useCallback(() => {
    if (lifes === 0) return;
    const unFoundLetters = toGuessWord
      .split('')
      .filter((letter) => !guessedLetters.includes(letter));

    const hintKey =
      unFoundLetters[Math.floor(Math.random() * unFoundLetters.length)];

    dispatch(hangmanActions.setKeyHint(hintKey));
  }, [dispatch, guessedLetters, lifes, toGuessWord]);

  useEffect(() => {
    if (hasLost) return;
    if (remainingTime === 0) {
      return handleTimeOut();
    }
    const updateTimeInterval = setInterval(() => {
      dispatch(hangmanActions.decreaseRemainingTime());
    }, 1000);

    return () => {
      clearInterval(updateTimeInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasLost, remainingTime]);

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
  );
};

export default HangmanTime;
