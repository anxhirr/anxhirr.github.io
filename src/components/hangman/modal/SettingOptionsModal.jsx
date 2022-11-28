import React, { useRef } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { hangmanActions } from '../../../store/Hangman-slice';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import Overlay from '../../overlay/Overlay';

const SettingOptionsPopUp = () => {
  const dispatch = useDispatch();
  const onClickOutside = useRef();

  const handleClose = () => {
    dispatch(hangmanActions.setShowSettingOptionsModal(false));
  };
  useOnClickOutside(onClickOutside, () => {
    handleClose();
  });

  return (
    <Overlay>
      <div ref={onClickOutside} className='hangman-modal--box'>
        <div className='hangman-settings-modal '>
          <div className='hangman-settings-modal__head'>
            <h2 className='hangman-settings-modal__heading'>Settings</h2>
            <div
              onClick={handleClose}
              className='hangman-settings-modal__close-icon--box flex-r-center'
            >
              <AiOutlineCloseCircle />
            </div>
          </div>

          <div className='hangman-settings-modal__theme'>
            <p>Theme</p>
            <span className='hangman-settings-modal__right-arrow--box'>
              <AiOutlineArrowRight />
            </span>
            <span className='hangman-settings-modal__details'>
              no theme set
            </span>
          </div>
          <div className='hangman-settings-modal__language'>
            <p>Language</p>
            <span className='hangman-settings-modal__right-arrow--box'>
              <AiOutlineArrowRight />
            </span>
            <span className='hangman-settings-modal__details'>English</span>
          </div>
          <div className='hangman-settings-modal__difficulty'>
            <p>Difficulty</p>
            <span className='hangman-settings-modal__right-arrow--box'>
              <AiOutlineArrowRight />
            </span>
            <span className='hangman-settings-modal__details'>Easy</span>
          </div>
          <div className='hangman-settings-modal__auth'>
            <p>Log in</p>
            <span className='hangman-settings-modal__right-arrow--box'>
              <AiOutlineArrowRight />
            </span>
            <span className='hangman-settings-modal__details'>
              no account linked
            </span>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default SettingOptionsPopUp;
