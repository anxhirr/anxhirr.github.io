import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hangmanActions } from '../../../store/Hangman-slice';

const HangmanTime = ({ hasLost, handleTimeOut }) => {
  const dispatch = useDispatch();
  const { remainingTime } = useSelector((state) => state.hangman);
  const { lifes } = useSelector((state) => state.hangman);

  let shouldPulse = remainingTime <= 3;
  if (remainingTime === 0 || hasLost) shouldPulse = false;

  const shouldHide = remainingTime === 0 || lifes === 0;

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
      className={`hangman__scores-hint ${
        shouldPulse ? 'hangman__scores-hint--pulse' : ''
      } ${
        shouldHide
          ? 'hangman__scores-hint--hidden'
          : 'hangman__scores-hint--visible'
      }`}
    >
      <span>Hint after:</span>
      <span>{remainingTime}</span>
    </div>
  );
};

export default HangmanTime;
