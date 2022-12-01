import React, { useRef, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { hangmanActions } from '../../../store/Hangman-slice';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import Overlay from '../../overlay/Overlay';

const SettingOptionsPopUp = () => {
  const dispatch = useDispatch();
  const onClickOutside = useRef();
  const [showOption, setShowOption] = useState(false);

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

          <div
            onClick={() => setShowOption(true)}
            className='hangman-settings-modal__theme-box'
          >
            <p>Theme</p>
            <span className='hangman-settings-modal__right-arrow--box'>
              <AiOutlineArrowRight />
            </span>
            {/* <span className='hangman-settings-modal__details'> 
              no theme set
            </span>*/}
          </div>

          <div className='hangman-settings-modal__language-box'>
            <button className='hangman-settings-modal__btn'>
              <p>Language</p>
              <span className='hangman-settings-modal__right-arrow--box'>
                <AiOutlineArrowRight />
              </span>
            </button>
            <div className='hangman-settings-modal__dropdown'>
              <ul>
                <li>Dark</li>
                <li>Light</li>
              </ul>
            </div>
            {/* <span className='hangman-settings-modal__details'>English</span> */}
          </div>
          <div className='hangman-settings-modal__difficulty-box'>
            <p>Difficulty</p>
            <span className='hangman-settings-modal__right-arrow--box'>
              <AiOutlineArrowRight />
            </span>
            {/* <span className='hangman-settings-modal__details'>Easy</span> */}
          </div>
          <div className='hangman-settings-modal__auth-box'>
            <p>Log in</p>
            <span className='hangman-settings-modal__right-arrow--box'>
              <AiOutlineArrowRight />
            </span>
            {/* <span className='hangman-settings-modal__details'>
              no account linked
            </span> */}
          </div>

          <div
            className={`hangman-settings-modal__option-choose ${
              showOption ? 'hangman-settings-modal__option-choose--visible' : ''
            }`}
          >
            <div className='hangman-option-choose'>
              <div className=' hangman-option-choose__head flex-r-space'>
                <span
                  onClick={() => setShowOption(false)}
                  className='hangman-option-choose__save-icon'
                >
                  <MdClose />
                </span>
                <span className='hangman-option-choose__discard-icon'>
                  <TiTick />
                </span>
              </div>
              <div className='hangman-option-choose__body'>
                <select>
                  <option value=''>Dark</option>
                  <option value=''>Light</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default SettingOptionsPopUp;
