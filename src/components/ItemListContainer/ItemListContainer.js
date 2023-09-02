import ItemList from "../ItemList/ItemList";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { products } = useGetProducts(categoryId);

  return (
    <div>
      <div className="list-container">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
