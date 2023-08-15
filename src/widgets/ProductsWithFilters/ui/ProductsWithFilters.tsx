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
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleDropdownSelect = (item: string) => {
    setSelectedCategory(item);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    if (seletedCategory !== '') {
      setFilteredProducts(
        products.filter((product) => {
          return product.category === seletedCategory;
        })
      );
    }
  }, [seletedCategory]);

  return (
    <>
      <div className={clsx('products-with-filters__filters')}>
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
        <div>
          {categories && (
            <Dropdown
              options={categories}
              onSelectItem={handleDropdownSelect}
            />
          )}
        </div>
      </div>
      <div className={clsx('products-with-filters__products')}>
        {filteredProducts ? (
          <ProductsList products={filteredProducts} />
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
