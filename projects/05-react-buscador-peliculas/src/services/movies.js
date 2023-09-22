const API_KEY = "acbc4f91";

export default async function searchMovies({ search }) {
  if (search === "") return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
    );

    const data = await response.json();

    const movies = data.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (err) {
    throw new Error("Movies not found");
  }

  // if (search) {
  //   fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
  //     .then((res) => res.json())
  //     .then((res) => setResponseMovies(res));
  // } else setResponseMovies(noMoviesJSON);
}
