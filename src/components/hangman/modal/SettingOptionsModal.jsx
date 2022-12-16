import React, { useRef, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { TbLanguage } from 'react-icons/tb'
import { MdDarkMode } from 'react-icons/md'
import { CgOptions } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { hangmanActions } from '../../../store/Hangman-slice'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import Overlay from '../../../overlay/Overlay'
import SettingOption from './SettingOption'

import { AiOutlineSearch } from 'react-icons/ai'
import { signInWithGoogle } from '../../auth/Firebase'

const SETTING_OPTIONS = [
  {
    name: 'Theme',
    id: 1,
    dropdownOptions: ['Dark', 'Light'],
    selectedOption: 'default light',
    showDropDown: false,
    icon: <MdDarkMode />,
  },
  {
    name: 'Language',
    id: 2,
    dropdownOptions: ['English', 'Albanian'],
    selectedOption: 'default english',
    showDropDown: false,
    icon: <TbLanguage />,
  },
  {
    name: 'Difficulty',
    id: 3,
    dropdownOptions: ['Easy', 'Hard'],
    selectedOption: 'default easy',
    showDropDown: false,
    icon: <CgOptions />,
  },
]

const SettingOptionsPopUp = () => {
  const dispatch = useDispatch()
  const onClickOutside = useRef()
  const [settingOptions, setSettingOptions] = useState(SETTING_OPTIONS)
  const [query, setQuery] = useState('')

  const handleClose = () => {
    dispatch(hangmanActions.setShowSettingOptionsModal(false))
  }
  useOnClickOutside(onClickOutside, () => {
    handleClose()
  })

  const filteredOptions = settingOptions.filter((option) => {
    return option.name.toLowerCase().includes(query.toLowerCase())
  })

  const handleLogIn = async () => {
    try {
      const results = await signInWithGoogle()
      const userName = results.user.displayName

      dispatch(hangmanActions.setSignInUserName(userName))
      dispatch(hangmanActions.setIsLoggedIn(true))
      dispatch(hangmanActions.setShowSettingOptionsModal(false))
    } catch (err) {
      console.log(err)
    }
  }

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
          <div className='hangman-settings-modal__search flex-r-center'>
            <input
              placeholder='Search Settings'
              onChange={(e) => setQuery(e.target.value)}
              className='hangman-settings-modal__search-input'
              type='text'
            />
          </div>

          {filteredOptions.map((option) => {
            return (
              <SettingOption
                key={option.id}
                option={option}
                setSettingOptions={setSettingOptions}
              />
            )
          })}

          <div className='hangman-settings-modal__login--box'>
            <button
              onClick={handleLogIn}
              className='hangman-settings-modal__login hangman-keyboard__key '
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  )
}

export default SettingOptionsPopUp
