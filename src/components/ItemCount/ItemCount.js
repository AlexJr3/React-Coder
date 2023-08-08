import { useState } from "react";

const ItemCount = () => {
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity === 0) {
      return;
    }
    return setQuantity(quantity - 1);
  };

  const incremet = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="count">
      <div className="controls">
        <button className="controls-btn" onClick={incremet}>
          +
        </button>
        <h4 className="number">{quantity}</h4>
        <button className="controls-add-btn">Agregar al carrito</button>
        <button className="controls-btn" onClick={decrement}>
          -
        </button>
      </div>
      <div className="add-cart">
        <button className="add-btn">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
