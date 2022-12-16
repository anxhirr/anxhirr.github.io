import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { hangmanActions } from '../../store/Hangman-slice'
import SettingOptionsModal from './modal/SettingOptionsModal'

const HangmanSettings = () => {
  const dispatch = useDispatch()
  const { showSettingOptionsModal } = useSelector((state) => state.hangman)

  const handleSettings = () => {
    dispatch(hangmanActions.setShowSettingOptionsModal(true))
  }

  return (
    <>
      {showSettingOptionsModal && <SettingOptionsModal />}
      <div className='hangman-header'>
        <div className='hangman-header__heading'>Hangman</div>
        <span
          onClick={handleSettings}
          className='hangman-header__settings-icon--box'
        >
          <FiSettings className='hangman-header__settings-icon' />
        </span>
      </div>
    </>
  )
}

export default HangmanSettings
