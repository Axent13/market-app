import { useState, useRef } from 'react';
import './Dropdown.scss';
import clsx from 'clsx';
import { useTheme } from '../../../shared/theme/useTheme';
import { Theme } from '../../../shared/theme/ThemeContext';

interface DropdownProps {
  options: string[];
  onSelectItem: (option: string) => void;
  defaultText: string;
}

export const Dropdown = ({
  options,
  onSelectItem,
  defaultText,
}: DropdownProps) => {
  const { theme } = useTheme();

  const [selectedValue, setSelectedValue] = useState<string>('');
  const [isOpened, setIsOpened] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeOpenMenus = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      isOpened &&
      !dropdownRef.current.contains(e.target as HTMLDivElement)
    ) {
      setIsOpened(false);
    }
  };

  document.addEventListener('mousedown', closeOpenMenus);

  const handleDropdownClick = () => {
    setIsOpened((prevState) => !prevState);
  };

  const handleOptionClick = (option: string) => {
    setIsOpened((prevState) => !prevState);
    setSelectedValue(option);
  };

  return (
    <div className={clsx('dropdown')} ref={dropdownRef}>
      <div className={clsx('dropdown__select dropdown__select_opened')}>
        <div
          className={clsx('dropdown__selected-value', {
            'dropdown__selected-value_opened': isOpened,
            'dropdown__selected-value_dark': theme === Theme.DARK,
          })}
          onClick={handleDropdownClick}
        >
          {selectedValue || (
            <span className={clsx('dropdown__placeholder')}>{defaultText}</span>
          )}
        </div>
        <div
          className={clsx('dropdown__options', {
            dropdown__options_opened: isOpened,
            dropdown__options_dark: theme === Theme.DARK,
          })}
        >
          {options.map((option) => {
            return (
              <div
                key={option}
                className={clsx('dropdown__option', {
                  dropdown__option_selected: option === selectedValue,
                  dropdown__option_dark: theme === Theme.DARK,
                })}
                onClick={() => {
                  handleOptionClick(option);
                  onSelectItem(option);
                }}
              >
                <div className='dropdown__option-text'>{option}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
