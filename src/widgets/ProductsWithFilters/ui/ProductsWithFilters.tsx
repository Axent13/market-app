import { useState, useEffect } from 'react';
import { useProducts } from '../../../features/useProducts';
import { SearchField } from '../../../entities/SearchField';
import { ProductsList } from '../../../features/ProductsList';
import clsx from 'clsx';
import './ProductsWithFilters.scss';
import { ProductsAPI } from '../api';
import { useTheme } from '../../../shared/theme/useTheme';
import { Theme } from '../../../shared/theme/ThemeContext';
import { Dropdown } from '../../../entities/Dropdown/ui/Dropdown';

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

  const { products, categories, fetchProductsEvent, fetchCategoriesEvent } =
    useProducts();

  useEffect(() => {
    fetchProductsEvent(ProductsAPI.GET_ALL_PRODUCTS);
    fetchCategoriesEvent(ProductsAPI.GET_CATEGORIES);
  }, []);

  const sendFormData = (e: any) => {
    e.preventDefault();
    fetchProductsEvent(`${ProductsAPI.SEARCH_PRODUCTS}${data.search}`);
  };

  const [seletedCategory, setSelectedCategory] = useState<string>('');

  const handleCategorySelect = (item: string) => {
    setSelectedCategory(item);
  };

  const [selectedLimit, setSelectedLimit] = useState<number>(0);
  const productsLimits = ['10', '20', '50'];

  const handleLimitSelect = (limit: string) => {
    setSelectedLimit(parseInt(limit));
  };

  useEffect(() => {
    setSelectedCategory('');
    if (selectedLimit !== 0) {
      fetchProductsEvent(
        `${ProductsAPI.GET_ALL_PRODUCTS}&limit=${selectedLimit}`
      );
    }
  }, [selectedLimit]);

  useEffect(() => {
    if (seletedCategory !== '') {
      fetchProductsEvent(
        `${ProductsAPI.GET_PRODUCTS_BY_CATEGORY}${seletedCategory}`
      );
    }
  }, [seletedCategory]);

  return (
    <>
      <div className={clsx('products-with-filters__filters')}>
        <form
          onSubmit={sendFormData}
          className={clsx('products-with-filters__form-with-search')}
        >
          <div className={clsx('products-with-filters__search-input')}>
            <SearchField
              name='search'
              value={data.search}
              placeholder='Search'
              onChange={handleChange}
            />
          </div>
        </form>
        <div className={clsx('products-with-filters__category-dropdown')}>
          {categories && (
            <Dropdown
              options={categories}
              onSelectItem={handleCategorySelect}
              defaultText='Category'
            />
          )}
        </div>
        <div className={clsx('products-with-filters__limit-dropdown')}>
          <Dropdown
            options={productsLimits}
            onSelectItem={handleLimitSelect}
            defaultText='10'
          />
        </div>
      </div>
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
