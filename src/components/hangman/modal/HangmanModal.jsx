import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { hangmanActions } from '../../../store/Hangman-slice';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import Overlay from '../../overlay/Overlay';

const HangmanModal = ({ children }) => {
  const dispatch = useDispatch();
  const onClickOutside = useRef();

  useOnClickOutside(onClickOutside, () => {
    dispatch(hangmanActions.setShowModal(false));
  });

  return (
    <Overlay>
      <div ref={onClickOutside} className='hangman__modal--box'>
        <div className='hangman__modal'>{children}</div>
      </div>
    </Overlay>
  );
};

export default HangmanModal;
