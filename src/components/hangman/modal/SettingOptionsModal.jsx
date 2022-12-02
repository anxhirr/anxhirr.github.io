import React, { useRef, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { hangmanActions } from '../../../store/Hangman-slice';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import Overlay from '../../../overlay/Overlay';
import SettingOption from './SettingOption';

const SETTING_OPTIONS = [
  { name: 'Theme', id: 1, options: ['Dark', 'Light'], showDropDown: false },
  {
    name: 'Language',
    id: 2,
    options: ['English', 'Albanian'],
    showDropDown: false,
  },
  { name: 'Difficulty', id: 3, options: ['Easy', 'Hard'], showDropDown: false },
];

const SettingOptionsPopUp = () => {
  const dispatch = useDispatch();
  const onClickOutside = useRef();
  const [settingOptions, setSettingOptions] = useState(SETTING_OPTIONS);

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

          {settingOptions.map((option) => {
            return (
              <SettingOption
                option={option}
                setSettingOptions={setSettingOptions}
              />
            );
          })}
        </div>
      </div>
    </Overlay>
  );
};

export default SettingOptionsPopUp;
