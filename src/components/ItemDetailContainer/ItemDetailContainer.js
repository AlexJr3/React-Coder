import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./style.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();
  console.log(itemId);

  useEffect(() => {
    getProductById(Number(itemId))
      .then((response) => setProduct(response))
      .catch((error) => console.log(error));
  }, [itemId]);

  return (
    <div className="itemDetailConatiner">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
