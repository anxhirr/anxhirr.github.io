import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useOnClickOutside from '../../../hooks/useOnClickOutside'
import { hangmanActions } from '../../../store/Hangman-slice'
import Overlay from '../../../overlay/Overlay'

const ConfirmModal = ({ startNewGame, generalUpdate }) => {
  const dispatch = useDispatch()
  const onClickOutside = useRef()

  const { confirmModalText } = useSelector((state) => state.hangman)

  useOnClickOutside(onClickOutside, () => {
    dispatch(hangmanActions.setShowConfirmModal(false))
  })

  const handleConfirmBtn = (e) => {
    dispatch(hangmanActions.setShowConfirmModal(false))
    if (
      confirmModalText ===
        'Are you sure you want to start a new game? Your score will be reset.' ||
      confirmModalText === 'You ran out of lifes, maybe try again?'
    ) {
      console.log('new game')
      startNewGame()
    }
    if (
      confirmModalText ===
      'You will loose 1 life! Are you sure you want to procced?'
    ) {
      generalUpdate()
      dispatch(hangmanActions.decreaseLife())
    }
  }

  const handleCancelBtn = () => {
    dispatch(hangmanActions.setShowConfirmModal(false))
  }

  return (
    <Overlay>
      <div ref={onClickOutside} className='hangman-modal--box'>
        <div className='hangman-confirm-modal'>
          {/* {lifes === 0 && (
            <div className='hangman-confirm-modal__text'>
              You ran out of lifes, maybe try again?
            </div>
          )}
          {score > 0 && !hasLost && (
            <div className='hangman-confirm-modal__text'>
              Are you sure you want to start a new game?
            </div>
          )}
          {guessedLetters.length > 0 && !hasLost && (
            <div className='hangman-confirm-modal__text'>
              Are you sure you want to start a new game?
            </div>
          )} */}
          <div className='hangman-confirm-modal__text'>{confirmModalText}</div>

          <div className='hangman-confirm-modal__keys u-margin-t--tiny'>
            <button
              onClick={handleConfirmBtn}
              className='hangman-keyboard__key'
            >
              yes
            </button>
            <button onClick={handleCancelBtn} className='hangman-keyboard__key'>
              no
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  )
}

export default ConfirmModal
