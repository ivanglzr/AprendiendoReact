import "./css/App.css"
import moviesJSON from "./mocks/results.json"
import noMoviesJSON from "./mocks/no-results.json"

import Movies from "./components/Movies"

function App() {
  const movies = moviesJSON.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form action="" className="">
          <input type="text" name="movie" id="movie" placeholder="Avengers, Star Wars" />
          <button type="submit">Enviar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies}></Movies>
      </main>
    </div>
  )
}

export default App
