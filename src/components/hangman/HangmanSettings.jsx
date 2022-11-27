import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import SettingsPopUp from './SettingsPopUp';

const HangmanSettings = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettings = () => {
    setShowSettings(true);
  };

  return (
    <>
      {showSettings && <SettingsPopUp setShowSettings={setShowSettings} />}
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
