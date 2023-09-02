import { useEffect, useState } from "react";
import { getProductsByCategory, getProducts } from "../asyncMock";

export const useGetProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;
    asyncFunc(categoryId)
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  }, [categoryId]);

  return { products };
};
