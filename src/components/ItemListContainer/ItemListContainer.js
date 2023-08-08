import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;
    asyncFunc(categoryId)
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <div className="list-container">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
