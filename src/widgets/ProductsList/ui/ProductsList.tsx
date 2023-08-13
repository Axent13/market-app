import { useEffect } from 'react';
import { useProducts } from '../../../features/useProducts/model/useProducts';
import { ProductsAPI } from '../api';

export const ProductsList = () => {
  const { products, fetchEvent } = useProducts();

  useEffect(() => {
    fetchEvent(ProductsAPI.GET_ALL_PRODUCTS);
  }, []);

  return (
    <div>
      Products List
      {products ? (
        <div>
          current products:{' '}
          {products.map((product) => (
            <div>
              {product.images[0]}
              {product.title}
              {product.price}
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
