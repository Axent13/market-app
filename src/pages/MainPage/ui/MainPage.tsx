import { Theme } from '../../../shared/theme/ThemeContext';
import { useTheme } from '../../../shared/theme/useTheme';
import { Header } from '../../../widgets/Header';
import { ProductsList } from '../../../widgets/ProductsList';
import './MainPage.scss';
import clsx from 'clsx';

export const MainPage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={clsx('main-page', {
        'main-page_dark': theme === Theme.DARK,
      })}
    >
      <Header />
      <div className={clsx('main-page__products-wrapper')}>
        <ProductsList />
      </div>
    </div>
  );
};
