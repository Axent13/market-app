import { createStore } from 'effector';
import { useEvent, useStore } from 'effector-react';
import { createEffect } from 'effector/effector.mjs';
import { ProductsList } from '../../../shared/types/Product';

const fetchProductsFx = createEffect((url: string) =>
  fetch(url).then((req) => req.json())
);

const $products = createStore<ProductsList>([]).on(
  fetchProductsFx.doneData,
  (_, result) => result.products
);

export const useProducts = () => {
  const products = useStore($products);
  const fetchEvent = useEvent(fetchProductsFx);

  return { products, fetchEvent };
};
