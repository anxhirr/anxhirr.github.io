import React from 'react';

import { useDispatch } from 'react-redux';
import overlayActions from '../../store/overlay-slice';

const WinLosePopUp = ({ hasLost, hasWon, startNewGame }) => {
  const dispatch = useDispatch();

  // const hangleModalClose = () => {
  //   console.log('close');
  //   dispatch(overlayActions.actions.setOverlay(false));
  // };

  // if (hasLost || hasWon) {
  //   dispatch(overlayActions.actions.setOverlay(true));
  // }
  return (
    <>
      <div className='overlay' />
      <div className='hangman__modal'>
        <div>
          {hasWon ? 'Congratulations you just won' : ''}
          {hasLost ? 'Failed' : ''}
        </div>
        <button
          // onClick={() => startNewGame()}
          className='hangman__modal--close'
        >
          close
        </button>
      </div>
    </>
  );
};

export default WinLosePopUp;
