import "./css/App.css";

import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";
import useSearch from "./hooks/useSearch";
import { useState } from "react";

import debounce from "just-debounce-it";
import { useCallback } from "react";

export default function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({
    search: search,
    sort: sort,
  });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="search"
            value={search}
            id="movie"
            placeholder="Avengers, Star Wars"
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Enviar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies}></Movies>}
      </main>
    </div>
  );
}
