import React from 'react';
import Overlay from '../Overlay';

const WinLosePopUp = ({ hasLost, hasWon }) => {
  return (
    <Overlay>
      <div className='hangman__modal'>
        <div>
          {hasWon ? 'Congratulations you just won' : ''}
          {hasLost ? 'Failed' : ''}
        </div>
        <button className='hangman__modal--close'>close</button>
      </div>
    </Overlay>
  );
};

export default WinLosePopUp;
