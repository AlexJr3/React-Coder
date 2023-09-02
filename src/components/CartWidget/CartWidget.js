import { useContext } from "react";
import cart from "./assets/cart.svg";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div>
      <Link
        to="/cart"
        className="button is-primary"
        style={{ display: totalQuantity > 0 ? "block" : "none" }}
      >
        <img src={cart} alt="cart-widget" />
        {totalQuantity}
      </Link>
    </div>
  );
};
