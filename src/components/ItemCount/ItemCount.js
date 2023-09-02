import { useCount } from "../../hooks/useCount";
import "./style.css";

const ItemCount = ({ onAdd }) => {
  const { increment, decrement, quantity } = useCount();

  const handleClick = () => {
    onAdd(quantity);
  };

  return (
    <div className="count">
      <div className="controls">
        <button className="controls-btn decrement" onClick={decrement}>
          -
        </button>
        <h4 className="controls-number">{quantity}</h4>
        <button className="controls-btn increment" onClick={increment}>
          +
        </button>
      </div>
      <div className="add-cart">
        <button className="add-btn" onClick={handleClick}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
