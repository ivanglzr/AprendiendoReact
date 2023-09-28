import { useContext } from "react";
import { CartContext } from "../context/cart";

export default function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used with a Cart Provider");
  }

  return {
    cart: context.cart,
    addToCart: context.addToCart,
    clearCart: context.clearCart,
    removeFromCart: context.removeFromCart,
  };
}
