import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock";

export const useDetailProductId = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();
  useEffect(() => {
    getProductById(Number(itemId))
      .then((response) => setProduct(response))
      .catch((error) => console.log(error));
  }, [itemId]);

  return { product };
};
