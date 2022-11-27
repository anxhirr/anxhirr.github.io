import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HangmanTime from './HangmanTime';
import { hangmanActions } from '../../../store/Hangman-slice';

const HangManDashboard = ({ hasLost, startNewGame }) => {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.hangman);
  const { lifes } = useSelector((state) => state.hangman);
  const { highestScore } = useSelector((state) => state.hangman);

  const handleNewGame = () => {
    if (score > 0 && !hasLost) {
      return dispatch(hangmanActions.setShowModal(true));
    }
    startNewGame();
  };

  return (
    <div className='hangman__dashboard--box'>
      <div className='hangman__dashboard'>
        <div className='hangman__dashboard--score'>
          <span>Score:</span>
          <span>{score}</span>
        </div>
        <div className='hangman__dashboard--highest-score'>
          <span>Highest-Score:</span>
          <span>{highestScore}</span>
        </div>
        <div className='hangman__dashboard--lifes'>
          <span>Lifes Left: </span>
          <span>{lifes}</span>
        </div>

        <HangmanTime hasLost={hasLost} />
      </div>
      <div className='hangman__new-game-key--box'>
        <button
          onClick={() => {
            handleNewGame();
          }}
          className={`hangman__key hangman__key--new-game ${
            lifes === 0 ? 'hangman__key--pulse' : ''
          }`}
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default HangManDashboard;
