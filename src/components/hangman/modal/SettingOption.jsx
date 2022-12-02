import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai';
import { CgOptions } from 'react-icons/cg';

const SettingOption = ({ option, setSettingOptions }) => {
  const handleOptionClick = (optionId) => {
    setSettingOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId
          ? { ...option, showDropDown: !option.showDropDown }
          : option
      )
    );
  };
  return (
    <div key={option.id} className='hangman-settings-modal__option-box'>
      <button
        onClick={() => handleOptionClick(option.id)}
        className='hangman-settings-modal__btn'
      >
        <span className='hangman-settings-modal__option-icon'>
          <CgOptions />
        </span>
        <div className='hangman-settings-modal__option u-margin-l--tiny'>
          <p className='hangman-settings-modal__option-name'>{option.name}</p>
          <span className='hangman-settings-modal__option-detail'>English</span>
        </div>
        <span className='hangman-settings-modal__option-arrow--box'>
          {option.showDropDown ? (
            <AiOutlineArrowDown />
          ) : (
            <AiOutlineArrowRight />
          )}
        </span>
      </button>
      <div
        className={`hangman-settings-modal__dropdown ${
          option.showDropDown ? 'hangman-settings-modal__dropdown--visible' : ''
        }`}
      >
        <ul className='hangman-settings-modal__dropdown-list flex-col-left'>
          {option.options.map((option, index) => {
            return (
              <li key={index} className='hangman-settings-modal__dropdown-item'>
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SettingOption;
