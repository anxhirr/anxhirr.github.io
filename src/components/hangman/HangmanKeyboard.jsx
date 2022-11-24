import React from 'react';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const HangmanKeyboard = ({
  addGuessedLetter,
  disabled,
  startNewGame,
  inactiveLetters,
  correctLetters,
}) => {
  return (
    <div className='hangman__keyboard'>
      {KEYS.map((key) => {
        const isWrong = inactiveLetters.includes(key);
        const isCorrect = correctLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            className={`hangman__key ${isWrong ? 'hangman__key--wrong' : ''} ${
              isCorrect ? 'hangman__key--correct' : ''
            }`}
            disabled={disabled || isWrong}
          >
            {key}
          </button>
        );
      })}
      <button onClick={() => startNewGame()} className='btn--new-game'>
        New Game
      </button>
    </div>
  );
};

export default HangmanKeyboard;
