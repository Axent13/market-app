import { Theme } from '../../../shared/theme/ThemeContext';
import { useTheme } from '../../../shared/theme/useTheme';
import './ProductCard.scss';
import clsx from 'clsx';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
}

export const ProductCard = ({ imageUrl, title, price }: ProductCardProps) => {
  const { theme } = useTheme();

  return (
    <div className={clsx('product-card')}>
      <div
        className={clsx('product-card__image', {
          'product-card__image_dark': theme === Theme.DARK,
        })}
        style={{
          background: `url(${imageUrl}) lightgray 50% / cover no-repeat`,
        }}
      />
      <p
        className={clsx('product-card__title', {
          'product-card__title_dark': theme === Theme.DARK,
        })}
      >
        {title}
      </p>
      <p
        className={clsx('product-card__price', {
          'product-card__price_dark': theme === Theme.DARK,
        })}
      >
        $&nbsp;{price}
      </p>
    </div>
  );
};
