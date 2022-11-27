import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { hangmanActions } from '../../store/Hangman-slice';

import Overlay from '../overlay/Overlay';

const WinLosePopUp = ({ hasLost, hasWon, startNewGame }) => {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.hangman);
  const onClickOutside = useRef();

  useOnClickOutside(onClickOutside, () => {
    dispatch(hangmanActions.setShowModal(false));
  });

  const handleConfirmBtn = (e) => {
    const btnText = e.target.innerText;
    dispatch(hangmanActions.setShowModal(false));
    console.log('hi');

    if (btnText === 'YES') {
      console.log('yes');
      startNewGame();
    }
  };

  return (
    <Overlay>
      <div ref={onClickOutside} className='hangman__modal--box'>
        <div className='hangman__modal'>
          {hasWon ? 'Congratulations you just won' : ''}
          {hasLost && <div>You ran out of lifes, maybe try again?</div>}
          {score > 0 && !hasLost && (
            <p>Are you sure you want to start a new game?</p>
          )}
          <div className='hangman__modal--keys'>
            <button onClick={handleConfirmBtn} className='hangman__key'>
              yes
            </button>
            <button onClick={handleConfirmBtn} className='hangman__key'>
              no
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default WinLosePopUp;