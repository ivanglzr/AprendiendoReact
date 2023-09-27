import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";

import useFilters from "./hooks/useFilters";
import { products as initialProducts } from "./mocks/products.json";
import { IS_DEVELOPMENT } from "./config";
import Cart from "./components/Cart";
import { CartProvider } from "./context/cart";

export default function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts({ products: initialProducts });

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}
