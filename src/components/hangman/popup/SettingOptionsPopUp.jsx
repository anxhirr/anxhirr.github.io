import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import HangmanModal from '../modal/HangmanModal';

const SettingOptionsPopUp = ({ setShowSettings }) => {
  const handleClose = () => setShowSettings(false);

  return (
    <HangmanModal>
      <div className='hangman__settings'>
        <div className='hangman__settings-head'>
          <div className='hangman__settings--heading'>Settings</div>
          <div onClick={handleClose} className='hangman__settings-icon--box'>
            <AiOutlineCloseCircle />
          </div>
        </div>

        <ul className='hangman__settings-box'>
          <li className='hangman__settings--theme'>
            <p>Theme</p>
            <span>
              <AiOutlineArrowRight />
            </span>
            <span className='hangman__settings--details'>no theme set</span>
          </li>
          <li className='hangman__settings--language'>
            <p>Language</p>
            <span>
              <AiOutlineArrowRight />
            </span>
            <span className='hangman__settings--details'>English</span>
          </li>
          <li className='hangman__settings--auth'>
            <p>Log in</p>
            <span>
              <AiOutlineArrowRight />
            </span>
            <span className='hangman__settings--details'>
              no account linked
            </span>
          </li>
        </ul>
      </div>
    </HangmanModal>
  );
};

export default SettingOptionsPopUp;
