import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hangmanActions } from '../../store/Hangman-slice';

const KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ['Next Word', 'New Game'],
];

const HangmanKeyboard = (props) => {
  const {
    hasLost,
    hasWon,
    startNewGame,
    incorrectLetters,
    correctLetters,
    keyHint,
    handleNextWord,
    lifes,
  } = props;
  const dispatch = useDispatch();
  const { guessedLetters } = useSelector((state) => state.hangman);

  const disabled = hasLost || hasWon || lifes === 0;

  const addGuessedLetter = useCallback(
    (pressedKey) => {
      if (hasLost || hasWon) return;
      dispatch(hangmanActions.addGuessedLetter(pressedKey));
    },
    [dispatch, hasLost, hasWon]
  );

  useEffect(() => {
    const handleKeyPress = (e) => {
      const pressedKey = e.key;
      if (!pressedKey.match(/^[a-zA-Z]$/)) return;
      if (guessedLetters.includes(pressedKey)) return;

      addGuessedLetter(pressedKey);
    };
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [addGuessedLetter, guessedLetters]);

  return (
    <div className='hangman__keyboard'>
      {KEYS.map((keyRow, rowIndex) => {
        return (
          <div key={keyRow} className={`hangman__keyboard--row-${rowIndex}`}>
            {keyRow.map((key) => {
              const isWrong = incorrectLetters.includes(key);
              const isCorrect = correctLetters.includes(key);
              const isDisabled = disabled || isWrong || isCorrect;
              let shouldShowHint = keyHint === key;
              if (isCorrect) shouldShowHint = false;

              if (key === 'Next Word' && lifes > 0) {
                return (
                  <button
                    key={key}
                    onClick={() => handleNextWord()}
                    className={`hangman__key hangman__key--next-word ${
                      disabled ? 'hangman__key--pulse' : ''
                    }`}
                  >
                    {key}
                  </button>
                );
              }
              if (key === 'New Game') {
                return (
                  <button
                    key={key}
                    onClick={() => {
                      startNewGame();
                    }}
                    className={`hangman__key hangman__key--new-game ${
                      lifes === 0 ? 'hangman__key--pulse' : ''
                    }`}
                  >
                    {key}
                  </button>
                );
              }

              return (
                <button
                  onClick={() => addGuessedLetter(key)}
                  key={key}
                  className={`hangman__key ${
                    isWrong ? 'hangman__key--wrong ' : ''
                  } ${disabled ? 'hangman__key--no-hover' : ''} ${
                    isCorrect ? 'hangman__key--correct' : ''
                  } ${shouldShowHint && !hasLost ? 'hangman__key--hint' : ''}`}
                  disabled={isDisabled}
                >
                  {key}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default HangmanKeyboard;
