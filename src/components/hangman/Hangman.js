import React, { useCallback, useEffect, useState } from 'react';
import HangmanBody from './HangmanBody';
import HangmanWord from './HangmanWord';
import HangmanKeyboard from './HangmanKeyboard';
import WordList from './WordList.json';
import HangManDashboard from './HangManDashboard';

const getNewWord = () => {
  return WordList[Math.floor(Math.random() * WordList.length)];
};

const TIME__LIMIT = 15;
const LIFES = 4;

const Hangman = () => {
  const [toGuessWord, setToGuessWord] = useState(getNewWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const [score, setScore] = useState(0);
  const [lifes, setLifes] = useState(LIFES);
  const [highestScore, setHighestScore] = useState(0);

  const [remainingTime, setRemainingTime] = useState(TIME__LIMIT);

  const [keyHint, setKeyHint] = useState(null);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !toGuessWord.includes(letter)
  );

  const hasLost = incorrectLetters.length >= 6;
  const hasWon = toGuessWord.split('').every((l) => guessedLetters.includes(l));

  const updateRemainingTime = () => {
    setRemainingTime((remainingTime) => remainingTime - 1);
  };

  const handleTimeOut = useCallback(() => {
    const unFoundLetters = toGuessWord
      .split('')
      .filter((letter) => !guessedLetters.includes(letter));

    const hintKey =
      unFoundLetters[Math.floor(Math.random() * unFoundLetters.length)];

    setKeyHint(hintKey);
  }, [guessedLetters, toGuessWord]);

  const updateDashboard = () => {
    setToGuessWord(getNewWord());
    setGuessedLetters([]);
    setRemainingTime(TIME__LIMIT);
    setKeyHint(null);
  };

  const startNewGame = useCallback(() => {
    updateDashboard();
    setLifes(LIFES);
    setScore(0);
    if (score > highestScore) setHighestScore(score);
  }, [highestScore, score]);

  const handleNextWord = useCallback(() => {
    updateDashboard();
    if (hasWon) setScore((prev) => prev + 1);
    if (!hasWon || hasLost) setLifes((prev) => prev - 1);
  }, [hasLost, hasWon]);

  const addGuessedLetter = useCallback(
    (pressedKey) => {
      if (hasLost || hasWon) return;
      setGuessedLetters((prev) => [...prev, pressedKey]);
    },
    [hasLost, hasWon]
  );

  useEffect(() => {
    const handleKeyPress = (e) => {
      const pressedKey = e.key;
      if (!pressedKey.match(/^[a-zA-Z]$/)) return;

      addGuessedLetter(pressedKey);
    };
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [addGuessedLetter]);

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

  useEffect(() => {
    if (hasLost) return;
    if (remainingTime === 0) {
      return handleTimeOut();
    }
    const updateTimeInterval = setInterval(() => {
      updateRemainingTime();
    }, 1000);

    return () => {
      clearInterval(updateTimeInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingTime]);

  return (
    <section className='hangman'>
      <div className='hangman__content container'>
        {/* <WinLosePopUp /> */}

        <HangManDashboard
          score={score}
          highestScore={highestScore}
          lifes={lifes}
          remainingTime={remainingTime}
          hasLost={hasLost}
        />
        <HangmanBody
          hasLost={hasLost}
          incorrectLetters={incorrectLetters}
          startNewGame={startNewGame}
          remainingTime={remainingTime}
        />
        <HangmanWord
          hasLost={hasLost}
          hasWon={hasWon}
          toGuessWord={toGuessWord}
          guessedLetters={guessedLetters}
        />
        <HangmanKeyboard
          hasLost={hasLost}
          hasWon={hasWon}
          startNewGame={startNewGame}
          addGuessedLetter={addGuessedLetter}
          inactiveLetters={incorrectLetters}
          correctLetters={guessedLetters.filter((l) => toGuessWord.includes(l))}
          keyHint={keyHint}
          lifes={lifes}
          handleNextWord={handleNextWord}
        />
      </div>
    </section>
  );
};

export default Hangman;
