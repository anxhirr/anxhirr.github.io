import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hangmanActions } from '../../store/Hangman-slice';

const HangmanNewGameBtn = ({ hasLost, startNewGame }) => {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.hangman);
  const { lifes } = useSelector((state) => state.hangman);

  const handleNewGame = () => {
    if (score > 0 && !hasLost) {
      return dispatch(hangmanActions.setShowConfirmModal(true));
    }
    startNewGame();
  };

  return (
    <div className='hangman-new-game'>
      <button
        onClick={() => {
          handleNewGame();
        }}
        className={`hangman-keyboard__key hangman-keyboard__key--new-game ${
          lifes === 0 ? 'hangman-keyboard__key--pulse' : ''
        }`}
      >
        New Game
      </button>
    </div>
  );
};

export default HangmanNewGameBtn;
