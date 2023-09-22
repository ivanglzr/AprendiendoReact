import "./css/App.css";

import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";
import useSearch from "./hooks/useSearch";

export default function App() {
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search: search });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
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
