import { ProductCard } from '../../../entities/ProductCard';
import './ProductsList.scss';
import clsx from 'clsx';
import { Products } from '../../../shared/types/Product';
import { useTheme } from '../../../shared/theme/useTheme';
import { Theme } from '../../../shared/theme/ThemeContext';

interface ProductsListProps {
  products: Products;
}

export const ProductsList = ({ products }: ProductsListProps) => {
  const { theme } = useTheme();

  return (
    <div className={clsx('products-list')}>
      <>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.images[0]}
              price={product.price}
              title={product.title}
            />
          ))
        ) : (
          <p
            className={clsx('products-list__no-products', {
              'products-list__no-products_dark': theme === Theme.DARK,
            })}
          >
            No products found...
          </p>
        )}
      </>
    </div>
  );
};
