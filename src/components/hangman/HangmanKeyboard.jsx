import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hangmanActions } from '../../store/Hangman-slice';

const KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Next'],
];

const HangmanKeyboard = (props) => {
  const {
    hasLost,
    hasWon,
    incorrectLetters,
    correctLetters,
    keyHint,
    lifes,
    update,
    handleNewGame,
  } = props;
  const dispatch = useDispatch();
  const { guessedLetters } = useSelector((state) => state.hangman);

  const addGuessedLetter = useCallback(
    (pressedKey) => {
      if (hasLost || hasWon) return;
      dispatch(hangmanActions.addGuessedLetter(pressedKey));
    },
    [dispatch, hasLost, hasWon]
  );

  const handleNextWord = useCallback(() => {
    update();
    if (hasWon) dispatch(hangmanActions.addScore());
    if (!hasWon || hasLost) dispatch(hangmanActions.decreaseLife());
  }, [dispatch, hasLost, hasWon, update]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const pressedKey = e.key;

      if (guessedLetters.includes(pressedKey)) return;
      if (pressedKey.match(/^[a-zA-Z]$/)) {
        addGuessedLetter(pressedKey);
      }

      if (pressedKey === 'Enter') {
        if (lifes === 0) handleNewGame();
        if (lifes > 0) handleNextWord();
        dispatch(hangmanActions.setShowModal(false));
      }
    };
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [
    addGuessedLetter,
    dispatch,
    guessedLetters,
    handleNewGame,
    handleNextWord,
    lifes,
  ]);

  return (
    <div className='hangman__keyboard'>
      {KEYS.map((keyRow, rowIndex) => {
        return (
          <div key={keyRow} className={`hangman__keyboard--row-${rowIndex}`}>
            {keyRow.map((key) => {
              const isWrong = incorrectLetters.includes(key);
              const isCorrect = correctLetters.includes(key);
              const isDisabled =
                hasLost || hasWon || lifes === 0 || isWrong || isCorrect;
              let shouldShowHint = keyHint === key;
              if (isCorrect) shouldShowHint = false;

              if (key === 'Next' && lifes > 0) {
                return (
                  <button
                    key={key}
                    onClick={() => handleNextWord()}
                    className={`hangman__key hangman__key--next-word ${
                      isDisabled ? 'hangman__key--pulse' : ''
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
                  } ${isDisabled ? 'hangman__key--no-hover' : ''} ${
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
