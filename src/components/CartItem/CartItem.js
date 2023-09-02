import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, title, price, quantity }) => {
  const { removeItem } = useContext(CartContext);
  const handleClick = () => {
    removeItem(id);
  };
  return (
    <div className="cart-item-info">
      <div className="cart-title">
        <h3>Producto</h3>
        <h4>{title}</h4>
      </div>
      <div className="cart-item-quantity">
        <h3>Cantidad:</h3>
        <h4>{quantity}</h4>
      </div>
      <div className="cart-item-price">
        <h3>Precio</h3>
        <h4>${price}</h4>
      </div>
      <div className="control-remove">
        <button onClick={handleClick}>X</button>
      </div>
    </div>
  );
};

export default CartItem;
