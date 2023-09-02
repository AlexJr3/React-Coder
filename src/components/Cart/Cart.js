import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalPrice } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="no-items-cart">
        <h1>No hay items en el carrito</h1>
        <Link to="/">Productos</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-item">
        {cart.map((prod) => (
          <CartItem key={prod.id} {...prod} />
        ))}
      </div>
      <div className="controls-cart-buy">
        <h3>Total: ${totalPrice}</h3>
        <button onClick={() => clearCart()}>Limpiar Carrito</button>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
