import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai';
import { CgOptions } from 'react-icons/cg';

const SettingOption = ({ option, setSettingOptions }) => {
  const showHideOptionDropDown = (optionId) => {
    setSettingOptions((prevOptions) =>
      prevOptions.map((option) => {
        if (option.id === optionId) {
          return { ...option, showDropDown: !option.showDropDown };
        }
        return { ...option, showDropDown: false };
      })
    );
  };

  const handleOptionSelect = (option, dropdownOption) => {
    const toCloseOptionId = option.id;

    showHideOptionDropDown(toCloseOptionId);

    setSettingOptions((prevOptions) => {
      return prevOptions.map((option) =>
        option.id === toCloseOptionId
          ? { ...option, selectedOption: dropdownOption }
          : option
      );
    });
  };
  return (
    <div className='hangman-settings-modal__option-box '>
      <button
        onClick={() => showHideOptionDropDown(option.id)}
        className='hangman-settings-modal__btn'
        style={{ borderRadius: option.showDropDown ? '1rem 1rem 0 0' : '' }}
      >
        <span className='hangman-settings-modal__option-icon'>
          {option.icon}
        </span>
        <div className='hangman-settings-modal__option u-margin-l--tiny'>
          <p className='hangman-settings-modal__option-name'>{option.name}</p>
          <span className='hangman-settings-modal__option-detail'>
            {option.selectedOption}
          </span>
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
        <ul className='hangman-settings-modal__dropdown-list '>
          {option.dropdownOptions.map((dropdownOption, index) => {
            return (
              <li
                onClick={(e) => handleOptionSelect(option, dropdownOption)}
                key={index}
                className='hangman-settings-modal__dropdown-item'
              >
                {dropdownOption}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SettingOption;
