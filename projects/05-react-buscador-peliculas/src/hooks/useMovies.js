import { useRef, useState } from "react";
import searchMovies from "../services/movies";

export default function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const previousSearch = useRef(search);

  const getMovies = async () => {
    if (previousSearch.current === search) return;
    try {
      setLoading(true);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return { movies, getMovies, loading };
}
