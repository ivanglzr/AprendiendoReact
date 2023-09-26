/* eslint-disable react/prop-types */
import { useId } from "react";
import "../css/Filters.css";
import useFilters from "../hooks/useFilters";

export default function Filters() {
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const { filters, setFilters } = useFilters();

  // const handleChangeMinPrice = (e) => {
  //   const minPriceValue = e.target.value;
  //   setFilters((prevState) => ({
  //     ...prevState,
  //     minPrice: minPriceValue,
  //   }));
  // };

  // const handleChangeCategory = (e) => {
  //   setFilters((prevState) => ({
  //     ...prevState,
  //     category: e.target.value,
  //   }));
  // };

  const handleChange = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      [e.target.dataset.name]: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          data-name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select
          id={categoryFilterId}
          data-name="category"
          onChange={handleChange}
        >
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Telefonos</option>
          <option value="home-decoration">Decoracion</option>
          <option value="fragrances">Fragancias</option>
          <option value="skincare">Maquillaje</option>
        </select>
      </div>
    </section>
  );
}
