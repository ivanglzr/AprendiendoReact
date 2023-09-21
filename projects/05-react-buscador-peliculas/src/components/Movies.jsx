function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        );
      })}
    </ul>
  );
}

function NoMovies() {
  return <p>No se encontraron peliculas</p>;
}

export default function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />;
}
