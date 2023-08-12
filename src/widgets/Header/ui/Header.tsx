import { ThemeToggler } from '../../../entities/ThemeToggler';
import './Header.scss';
import clsx from 'clsx';
import { Theme } from '../../../shared/theme/ThemeContext';
import { useTheme } from '../../../shared/theme/useTheme';

export const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={clsx('header', { header_dark: theme === Theme.DARK })}>
      <div className='header__content-wrapper'>
        <h1
          className={clsx('header__text', {
            header__text_dark: theme === Theme.DARK,
          })}
        >
          Market
        </h1>
        <ThemeToggler />
      </div>
      <div className='header__delimiter'></div>
    </header>
  );
};
