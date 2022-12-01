import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hangmanActions } from '../../store/Hangman-slice';

import HangManDashboard from './dashboard/HangManDashboard';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import HangmanKeyboard from './HangmanKeyboard';
import ConfirmModal from './modal/ConfirmModal';
import { PARTS } from './HangmanDrawing';
import HangmanSettings from './HangmanSettings';
import HangmanNewGameBtn from './HangmanNewGameBtn';

const TRIES__LEFT = PARTS.length;

const Hangman = () => {
  const dispatch = useDispatch();
  const { toGuessWord } = useSelector((state) => state.hangman);
  const { guessedLetters } = useSelector((state) => state.hangman);
  const { score } = useSelector((state) => state.hangman);
  const { highestScore } = useSelector((state) => state.hangman);
  const { lifes } = useSelector((state) => state.hangman);
  const { showConfirmModal } = useSelector((state) => state.hangman);
  const { keyHint } = useSelector((state) => state.hangman);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !toGuessWord.includes(letter)
  );
  const correctLetters = guessedLetters.filter((letter) =>
    toGuessWord.includes(letter)
  );

  const hasLost = incorrectLetters.length >= TRIES__LEFT || lifes === 0;
  const hasWon = toGuessWord.split('').every((l) => guessedLetters.includes(l));

  const update = useCallback(() => {
    dispatch(hangmanActions.updateToGuessWord());
    dispatch(hangmanActions.resetGuessedLetters());
    dispatch(hangmanActions.resetRemainingTime());
    dispatch(hangmanActions.resetKeyHint());
  }, [dispatch]);

  const startNewGame = useCallback(() => {
    update();
    dispatch(hangmanActions.resetLifes());
    dispatch(hangmanActions.resetScore());
    if (score > highestScore) dispatch(hangmanActions.setHighestScore(score));
  }, [dispatch, highestScore, score, update]);

  useEffect(() => {
    if (lifes === 0) dispatch(hangmanActions.setShowConfirmModal(true));
  }, [dispatch, lifes]);

  return (
    <section className='hangman'>
      <div className='hangman__content'>
        {showConfirmModal && (
          <ConfirmModal
            startNewGame={startNewGame}
            hasLost={hasLost}
            hasWon={hasWon}
          />
        )}
        <HangmanSettings />
        <HangManDashboard
          hasWon={hasWon}
          highestScore={highestScore}
          hasLost={hasLost}
        />
        <HangmanNewGameBtn hasLost={hasLost} startNewGame={startNewGame} />
        <HangmanDrawing hasLost={hasLost} incorrectLetters={incorrectLetters} />
        <HangmanWord
          hasLost={hasLost}
          hasWon={hasWon}
          guessedLetters={guessedLetters}
        />
        <HangmanKeyboard
          hasLost={hasLost}
          hasWon={hasWon}
          incorrectLetters={incorrectLetters}
          correctLetters={correctLetters}
          keyHint={keyHint}
          lifes={lifes}
        />
      </div>
    </section>
  );
};

export default Hangman;
