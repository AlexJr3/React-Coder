import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    const newCart = [...cart, { ...item, quantity }];
    if (!isInCart(item.id)) {
      setCart(newCart);
    } else {
      setCart((prev) =>
        prev.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    }

    quantityProducts(newCart);
  };

  const quantityProducts = (newCart) => {
    const quantity = newCart.reduce((acc, prod) => acc + prod.quantity, 0);
    setTotalQuantity(quantity);
    return quantity;
  };

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
    quantityProducts(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      const productPrice = product.price * product.quantity;
      return total + productPrice;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <CartContext.Provider
      value={{
        totalQuantity,
        cart,
        addItem,
        removeItem,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
