import { useEffect, useState, useRef } from "react";

export default function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("La busqueda no puede tener un numero");
      return;
    }

    if (search.length < 3) {
      setError("La busqueda es demasiado corta");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
