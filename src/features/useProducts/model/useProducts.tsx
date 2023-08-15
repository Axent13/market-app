import { createStore } from 'effector';
import { useEvent, useStore } from 'effector-react';
import { createEffect } from 'effector/effector.mjs';
import { Categories, Products } from '../../../shared/types/Product';

const fetchProductsFx = createEffect((url: string) =>
  fetch(url).then((req) => req.json())
);

const fetchCategoriesFx = createEffect((url: string) =>
  fetch(url).then((req) => req.json())
);

const $products = createStore<Products>([]).on(
  fetchProductsFx.doneData,
  (_, result) => result.products
);

const $categories = createStore<Categories>([]).on(
  fetchCategoriesFx.doneData,
  (_, result) => result
);

export const useProducts = () => {
  const products = useStore($products);
  const categories = useStore($categories);
  const fetchProductsEvent = useEvent(fetchProductsFx);
  const fetchCategoriesEvent = useEvent(fetchCategoriesFx);

  return { products, categories, fetchProductsEvent, fetchCategoriesEvent };
};
