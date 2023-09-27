import { useId } from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";

import "../css/Cart.css";

export default function Cart() {
  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" name="cart" id={cartCheckboxId} />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/3/thumbnail.jpg"
              alt="Phone"
            />
            <div>
              <strong>iPhone</strong> - $1499
            </div>

            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
