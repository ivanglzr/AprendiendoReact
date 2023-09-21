import "./css/App.css";

import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";
import { useEffect, useState } from "react";

// import { useRef } from "react";

function App() {
  const { movies } = useMovies();

  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  // const inputRef = useRef();
  // alert(movie);

  const handleSubmit = (e) => {
    e.preDefault();

    alert(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }

    if (query.match(/^\d+$/)) {
      setError("La busqueda no puede tener un numero");
      return;
    }

    if (query.length < 3) {
      setError("La busqueda es demasiado corta");
      return;
    }

    setError(null);
  }, [query]);

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="query"
            id="movie"
            placeholder="Avengers, Star Wars"
          />
          <button type="submit">Enviar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies}></Movies>
      </main>
    </div>
  );
}

export default App;
