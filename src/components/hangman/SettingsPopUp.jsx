import React, { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Overlay from '../overlay/Overlay';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const SettingsPopUp = ({ setShowSettings }) => {
  const onClickOutside = useRef();

  useOnClickOutside(onClickOutside, () => {
    setShowSettings(false);
  });

  const handleClose = () => setShowSettings(false);

  return (
    <Overlay>
      <div ref={onClickOutside} className='hangman__modal--box'>
        <div className='hangman__modal'>
          <div className='hangman__settings'>
            <div className='hangman__settings-head'>
              <div className='hangman__settings--heading'>Settings</div>
              <div
                onClick={handleClose}
                className='hangman__settings-icon--box'
              >
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
        </div>
      </div>
    </Overlay>
  );
};

export default SettingsPopUp;
