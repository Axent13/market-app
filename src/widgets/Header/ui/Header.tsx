import { ThemeToggler } from '../../../entities/ThemeToggler';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__content-wrapper'>
        <h1 className='header__text'>Market</h1>
        <ThemeToggler />
      </div>
      <div className='header__delimiter'></div>
    </header>
  );
};
