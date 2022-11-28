import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { hangmanActions } from '../../../store/Hangman-slice';
import Overlay from '../../overlay/Overlay';

const WinLosePopUp = ({ hasLost, hasWon, startNewGame }) => {
  const dispatch = useDispatch();
  const onClickOutside = useRef();
  const { score } = useSelector((state) => state.hangman);

  useOnClickOutside(onClickOutside, () => {
    dispatch(hangmanActions.setShowWinLoseModal(false));
  });

  const handleConfirmBtn = (e) => {
    const btnText = e.target.innerText;
    dispatch(hangmanActions.setShowWinLoseModal(false));

    if (btnText === 'YES') {
      console.log('yes');
      startNewGame();
    }
  };

  return (
    <Overlay>
      <div ref={onClickOutside} className='hangman-modal--box'>
        <div className='hangman-confirm-modal'>
          {hasLost && (
            <div className='hangman-confirm-modal__text'>
              You ran out of lifes, maybe try again?
            </div>
          )}
          {score > 0 && !hasLost && (
            <div className='hangman-confirm-modal__text'>
              Are you sure you want to start a new game?
            </div>
          )}

          <div className='hangman-confirm-modal__keys u-margin-t--tiny'>
            <button
              onClick={handleConfirmBtn}
              className='hangman-keyboard__key'
            >
              yes
            </button>
            <button
              onClick={handleConfirmBtn}
              className='hangman-keyboard__key'
            >
              no
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default WinLosePopUp;
