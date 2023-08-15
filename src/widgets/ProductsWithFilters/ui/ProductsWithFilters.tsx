import { useState, useEffect } from 'react';
import { useProducts } from '../../../features/useProducts';
import { SearchField } from '../../../entities/SearchField';
import { ProductsList } from '../../../features/ProductsList';
import clsx from 'clsx';
import './ProductsWithFilters.scss';
import { ProductsAPI } from '../api';
import { useTheme } from '../../../shared/theme/useTheme';
import { Theme } from '../../../shared/theme/ThemeContext';

interface InputsData {
  search: string;
}

export const ProductsWithFilters = () => {
  const { theme } = useTheme();

  const initialData: InputsData = {
    search: '',
  };

  const [data, setData] = useState<InputsData>(initialData);

  const handleChange = (target: any) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const { products, fetchEvent } = useProducts();

  useEffect(() => {
    fetchEvent(ProductsAPI.GET_ALL_PRODUCTS);
  }, []);

  const sendFormData = (e: any) => {
    e.preventDefault();
    fetchEvent(`${ProductsAPI.SEARCH_PRODUCTS}${data.search}`);
  };

  return (
    <>
      <form onSubmit={sendFormData}>
        <div className={clsx('products-with-filters__search-input')}>
          <SearchField
            name='search'
            value={data.search}
            placeholder='Search'
            onChange={handleChange}
          />
        </div>
      </form>
      <div className={clsx('products-with-filters__products')}>
        {products ? (
          <ProductsList products={products} />
        ) : (
          <p
            className={clsx('products-with-filters__loading', {
              'products-with-filters__loading_dark': theme === Theme.DARK,
            })}
          >
            Loading...
          </p>
        )}
      </div>
    </>
  );
};
