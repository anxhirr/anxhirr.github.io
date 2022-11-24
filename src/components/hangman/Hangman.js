import React, { useCallback, useEffect, useState } from 'react';
import HangmanBody from './HangmanBody';
import HangmanWord from './HangmanWord';
import HangmanKeyboard from './HangmanKeyboard';
import WordList from './WordList.json';

const getNewWord = () => {
  return WordList[Math.floor(Math.random() * WordList.length)];
};

const Hangman = () => {
  const [toGuessWord, setToGuessWord] = useState(getNewWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !toGuessWord.includes(letter)
  );

  // const disabledKeyboardBtn =

  const hasLost = incorrectLetters.length >= 6;
  const hasWon = toGuessWord.split('').every((l) => guessedLetters.includes(l));

  const startNewGame = () => {
    setToGuessWord(getNewWord());
  };

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
      if (!pressedKey.match(/^[a-z]$/)) return;

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
  }, [addGuessedLetter]);

  return (
    <section className='hangman'>
      <div className='hangman__content container'>
        <HangmanBody
          hasLost={hasLost}
          hasWon={hasWon}
          incorrectLetters={incorrectLetters}
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
