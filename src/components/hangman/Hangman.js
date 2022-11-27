import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hangmanActions } from '../../store/Hangman-slice';

import HangManDashboard from './dashboard/HangManDashboard';
import HangmanBody from './HangmanBody';
import HangmanWord from './HangmanWord';
import HangmanKeyboard from './HangmanKeyboard';
import PARTS from './PARTS';
console.log(PARTS.length);

const TRIES = PARTS.length;

const Hangman = () => {
  const dispatch = useDispatch();

  const { toGuessWord } = useSelector((state) => state.hangman);
  const { guessedLetters } = useSelector((state) => state.hangman);
  const { score } = useSelector((state) => state.hangman);
  const { lifes } = useSelector((state) => state.hangman);
  const { highestScore } = useSelector((state) => state.hangman);
  const { remainingTime } = useSelector((state) => state.hangman);

  const [keyHint, setKeyHint] = useState(null);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !toGuessWord.includes(letter)
  );
  const correctLetters = guessedLetters.filter((letter) =>
    toGuessWord.includes(letter)
  );

  const hasLost = incorrectLetters.length >= TRIES;
  const hasWon = toGuessWord.split('').every((l) => guessedLetters.includes(l));

  const handleTimeOut = useCallback(() => {
    if (lifes === 0) return;
    const unFoundLetters = toGuessWord
      .split('')
      .filter((letter) => !guessedLetters.includes(letter));

    const hintKey =
      unFoundLetters[Math.floor(Math.random() * unFoundLetters.length)];

    setKeyHint(hintKey);
  }, [guessedLetters, lifes, toGuessWord]);

  const update = useCallback(() => {
    dispatch(hangmanActions.updateToGuessWord());
    dispatch(hangmanActions.resetGuessedLetters());
    dispatch(hangmanActions.resetRemainingTime());
    setKeyHint(null);
  }, [dispatch]);

  const startNewGame = useCallback(() => {
    update();
    dispatch(hangmanActions.resetLifes());
    dispatch(hangmanActions.resetScore());
    if (score > highestScore) dispatch(hangmanActions.setHighestScore(score));
  }, [dispatch, highestScore, score, update]);

  const handleNextWord = useCallback(() => {
    update();
    if (hasWon) dispatch(hangmanActions.addScore());
    if (!hasWon || hasLost) dispatch(hangmanActions.decreaseLife());
  }, [dispatch, hasLost, hasWon, update]);

  useEffect(() => {
    const handleEnterPress = (e) => {
      const pressedKey = e.key;
      if (pressedKey !== 'Enter') return;
      if (lifes === 0) startNewGame();
      if (lifes > 0) handleNextWord();
    };
    document.addEventListener('keypress', handleEnterPress);
    return () => {
      document.removeEventListener('keypress', handleEnterPress);
    };
  }, [handleNextWord, lifes, startNewGame]);

  return (
    <section className='hangman'>
      <div className='hangman__content'>
        {/* <WinLosePopUp /> */}

        <HangManDashboard handleTimeOut={handleTimeOut} hasLost={hasLost} />
        <HangmanBody
          hasLost={hasLost}
          incorrectLetters={incorrectLetters}
          startNewGame={startNewGame}
          remainingTime={remainingTime}
        />
        <HangmanWord
          hasLost={hasLost}
          hasWon={hasWon}
          guessedLetters={guessedLetters}
        />
        <HangmanKeyboard
          hasLost={hasLost}
          hasWon={hasWon}
          startNewGame={startNewGame}
          incorrectLetters={incorrectLetters}
          correctLetters={correctLetters}
          keyHint={keyHint}
          lifes={lifes}
          handleNextWord={handleNextWord}
        />
      </div>
    </section>
  );
};

export default Hangman;
