import React, { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const WinLosePopUp = () => {
  const onClickOutside = useRef();

  useOnClickOutside(onClickOutside, () => {
    console.log('outside');
  });

  return (
    <div className='overlay'>
      <div ref={onClickOutside} className='hangman__modal'>
        <div className='hangman__modal--text'>
          {/* {hasWon ? 'Congratulations you just won' : ''}
          {hasLost ? 'Failed' : ''} */}
          good job
        </div>
      </div>
    </div>
  );
};

export default WinLosePopUp;
