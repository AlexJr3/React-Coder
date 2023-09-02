import ItemDetail from "../ItemDetail/ItemDetail";
import "./style.css";
import { useDetailProductId } from "../../hooks/useDetailProductId";

const ItemDetailContainer = () => {
  const { product } = useDetailProductId();

  return (
    <div className="itemDetailConatiner">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
