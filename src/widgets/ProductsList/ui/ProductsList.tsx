import { useEffect } from 'react';
import { useProducts } from '../../../features/useProducts/model/useProducts';
import { ProductsAPI } from '../api';
import { ProductCard } from '../../../entities/ProductCard/ui/ProductCard';
import './ProductsList.scss';
import clsx from 'clsx';

export const ProductsList = () => {
  const { products, fetchEvent } = useProducts();

  useEffect(() => {
    fetchEvent(ProductsAPI.GET_ALL_PRODUCTS);
  }, []);

  return (
    <div className={clsx('products-list')}>
      {products ? (
        <>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.images[0]}
              price={product.price}
              title={product.title}
            />
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
