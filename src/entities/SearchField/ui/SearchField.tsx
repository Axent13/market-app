import { ChangeEvent } from 'react';
import clsx from 'clsx';
import './SearchField.scss';
import { useTheme } from '../../../shared/theme/useTheme';
import { Theme } from '../../../shared/theme/ThemeContext';

interface SearchFieldProps {
  name?: string;
  value?: string;
  onChange: (event: { name: string; value: string }) => void;
  placeholder?: string;
}

export const SearchField = ({
  name,
  value,
  onChange,
  placeholder,
}: SearchFieldProps) => {
  const { theme } = useTheme();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ name: event.target.name, value: event.target.value });
  };

  return (
    <input
      id={name}
      name={name}
      value={value}
      pattern='([a-zA-Z0-9]| )+'
      title='Поисковая строка поддерживает только латинские символы, цифры и пробелы'
      onChange={handleChange}
      className={clsx('search-field', {
        'search-field_dark': theme === Theme.DARK,
      })}
      placeholder={placeholder}
    />
  );
};
