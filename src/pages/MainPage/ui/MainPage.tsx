import { Theme } from '../../../shared/theme/ThemeContext';
import { useTheme } from '../../../shared/theme/useTheme';
import { Header } from '../../../widgets/Header';
import { ProductsWithFilters } from '../../../widgets/ProductsWithFilters';
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
      <div className={clsx('main-page__content-wrapper')}>
        <ProductsWithFilters />
      </div>
    </div>
  );
};
