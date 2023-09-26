/* eslint-disable react/prop-types */
import useFilters from "../hooks/useFilters";
import "../css/Footer.css";

export default function Footer() {
  const { filters } = useFilters();

  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {/* <h4>
        Prueba tecnica de React - <span>@midudev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  );
}
