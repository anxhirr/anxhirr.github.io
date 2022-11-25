import React, { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const WinLosePopUp = ({ hasLost, hasWon }) => {
  const onClickOutside = useRef();

  let show = false;
  if (hasLost) show = true;

  useOnClickOutside(onClickOutside, () => {
    console.log('outside');
    show = false;
    console.log(show);
  });

  const handleClick = () => {
    console.log('clicked');
  };

  console.log(show);

  if (show)
    return (
      <div className='overlay'>
        <div ref={onClickOutside} className='hangman__modal'>
          <div onClick={handleClick} className='hangman__modal--text'>
            {hasWon ? 'Congratulations you just won' : ''}
            {hasLost ? 'Failed' : ''}
          </div>
        </div>
      </div>
    );
};

export default WinLosePopUp;
