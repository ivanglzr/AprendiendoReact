import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";

import useFilters from "./hooks/useFilters";
import { products as initialProducts } from "./mocks/products.json";
import { IS_DEVELOPMENT } from "./config";

export default function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts({ products: initialProducts });

  return (
    <>
      <Header />
      {<Products products={filteredProducts} />}
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
}
