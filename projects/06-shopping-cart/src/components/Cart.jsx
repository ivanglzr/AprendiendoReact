/* eslint-disable react/prop-types */
import { useId } from "react";
import { ClearCartIcon, CartIcon } from "./Icons";

import useCart from "../hooks/useCart";

import "../css/Cart.css";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export default function Cart() {
  const cartCheckboxId = useId();

  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" name="cart" id={cartCheckboxId} />

      <aside className="cart">
        <ul>
          {cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                {...item}
                addToCart={() => addToCart(item)}
              />
            );
          })}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
