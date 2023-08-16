import { useTheme } from '../../../shared/theme/useTheme';
import './ThemeToggler.scss';

export const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className='toggle-button'>
      <input
        className='toggle-button__checkbox'
        type='checkbox'
        name='theme-toggler'
        id='theme-toggler'
        onClick={toggleTheme}
      />
      <label className='toggle-button__label' htmlFor='theme-toggler'></label>
    </div>
  );
};
