import moviesJSON from "../mocks/results.json";
import noMoviesJSON from "../mocks/no-results.json";

export default function useMovies() {
  const movies = moviesJSON.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}
