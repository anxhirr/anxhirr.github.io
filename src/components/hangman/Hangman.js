import React, { useCallback, useEffect, useState } from 'react';
import HangmanBody from './HangmanBody';
import HangmanWord from './HangmanWord';
import HangmanKeyboard from './HangmanKeyboard';
import WordList from './WordList.json';
// import WinLosePopUp from './WinLosePopUp';
import HangManScores from './HangManScores';

const getNewWord = () => {
  return WordList[Math.floor(Math.random() * WordList.length)];
};

const Hangman = () => {
  const [toGuessWord, setToGuessWord] = useState(getNewWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const [streakWins, setStreakWins] = useState(0);
  const [loses, setLoses] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !toGuessWord.includes(letter)
  );

  const hasLost = incorrectLetters.length >= 6;
  const hasWon = toGuessWord.split('').every((l) => guessedLetters.includes(l));

  const startNewGame = () => {
    setToGuessWord(getNewWord());
    setGuessedLetters([]);

    if (hasWon) {
      setStreakWins((prev) => prev + 1);
    }
    if (hasLost) {
      setLoses((prev) => prev + 1);
    }
    if (loses >= 3) {
      setLoses(0);
      setStreakWins(0);

      if (streakWins > highestScore) setHighestScore(streakWins);
    }
  };

  console.log(streakWins);
  console.log(loses);

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

      startNewGame();
    };

    document.addEventListener('keypress', handleEnterPress);

    return () => {
      document.removeEventListener('keypress', handleEnterPress);
    };
  }, [startNewGame]);

  return (
    <section className='hangman'>
      <div className='hangman__content container'>
        {/* <WinLosePopUp hasLost={hasLost} hasWon={hasWon} /> */}
        <HangManScores
          score={streakWins}
          highestScore={highestScore}
          triesLeft={loses}
        />
        <HangmanBody
          hasLost={hasLost}
          incorrectLetters={incorrectLetters}
          startNewGame={startNewGame}
        />
        <HangmanWord
          hasLost={hasLost}
          hasWon={hasWon}
          toGuessWord={toGuessWord}
          guessedLetters={guessedLetters}
        />
        <HangmanKeyboard
          disabled={hasLost || hasWon}
          startNewGame={startNewGame}
          addGuessedLetter={addGuessedLetter}
          inactiveLetters={incorrectLetters}
          correctLetters={guessedLetters.filter((l) => toGuessWord.includes(l))}
        />
      </div>
    </section>
  );
};

export default Hangman;
