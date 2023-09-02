import { useState } from "react";

export const useCount = () => {
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity === 0) {
      return;
    }
    return setQuantity(quantity - 1);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  return { increment, decrement, quantity };
};
