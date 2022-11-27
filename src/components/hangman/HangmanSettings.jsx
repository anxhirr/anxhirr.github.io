import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { hangmanActions } from '../../store/Hangman-slice';
import SettingOptionsPopUp from './popup/SettingOptionsPopUp';

const HangmanSettings = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.hangman.showModal);

  const handleSettings = () => {
    dispatch(hangmanActions.setShowModal(true));
  };

  return (
    <>
      {showModal && <SettingOptionsPopUp />}
      <div className='hangman__header'>
        <div className='hangman__heading'>Hangman</div>
        <span onClick={handleSettings} className='hangman__settings-icon--box'>
          <FiSettings className='hangman__settings-icon' />
        </span>
      </div>
    </>
  );
};

export default HangmanSettings;
