import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hangmanActions } from '../../store/Hangman-slice';

import HangManDashboard from './dashboard/HangManDashboard';
import HangmanBody from './HangmanBody';
import HangmanWord from './HangmanWord';
import HangmanKeyboard from './HangmanKeyboard';
import WinLosePopUp from './popup/WinLosePopUp';
import { PARTS } from './HangmanBody';
import HangmanSettings from './HangmanSettings';

const TRIES__LEFT = PARTS.length;

const Hangman = () => {
  const dispatch = useDispatch();
  const { toGuessWord } = useSelector((state) => state.hangman);
  const { guessedLetters } = useSelector((state) => state.hangman);
  const { score } = useSelector((state) => state.hangman);
  const { highestScore } = useSelector((state) => state.hangman);
  const { lifes } = useSelector((state) => state.hangman);
  const { showModal } = useSelector((state) => state.hangman);
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
    if (lifes === 0) dispatch(hangmanActions.setShowModal(true));
  }, [dispatch, lifes]);

  return (
    <section className='hangman'>
      <div className='hangman__content'>
        {showModal && (
          <WinLosePopUp
            startNewGame={startNewGame}
            hasLost={hasLost}
            hasWon={hasWon}
          />
        )}

        <HangmanSettings />

        <HangManDashboard startNewGame={startNewGame} hasLost={hasLost} />

        <HangmanBody hasLost={hasLost} incorrectLetters={incorrectLetters} />
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
          update={update}
        />
      </div>
    </section>
  );
};

export default Hangman;
