import React from 'react';

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
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
];

const HangmanKeyboard = (props) => {
  const {
    addGuessedLetter,
    hasLost,
    hasWon,
    startNewGame,
    inactiveLetters,
    correctLetters,
    keyHint,
    handleNextWord,
    lifes,
  } = props;

  const disabled = hasLost || hasWon;

  return (
    <div className='hangman__keyboard'>
      {KEYS.map((key) => {
        const isWrong = inactiveLetters.includes(key);
        const isCorrect = correctLetters.includes(key);
        const isDisabled = disabled || isWrong || isCorrect;
        let shouldShowHint = keyHint === key;
        if (isCorrect) shouldShowHint = false;

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            className={`hangman__key 
            ${isWrong ? 'hangman__key--wrong ' : ''} 
            ${disabled ? 'hangman__key--no-hover' : ''} 
            ${isCorrect ? 'hangman__key--correct' : ''} 
            ${shouldShowHint && !hasLost ? 'hangman__key--hint' : ''} 
            `}
            disabled={isDisabled}
          >
            {key}
          </button>
        );
      })}

      {lifes > 0 && (
        <button
          onClick={() => handleNextWord()}
          className={`hangman__key hangman__key--next-word ${
            disabled ? 'hangman__key--pulse' : ''
          }`}
        >
          Next Word
        </button>
      )}
      <button
        onClick={() => {
          startNewGame();
        }}
        className={`hangman__key ${lifes === 0 ? 'hangman__key--pulse' : ''}`}
      >
        New Game
      </button>
    </div>
  );
};

export default HangmanKeyboard;
