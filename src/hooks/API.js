import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const apiToken = import.meta.env.VITE_MOVIE_API_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: apiToken,
  },
};

// Due to a TMDB API  limitation, the maximun number of pages accesible are 500 as read in the following message error : "Invalid page: Pages start at 1 and max at 500. They are expected to be an integer."
const API_LIMIT = 500 * 20;

export const useMovies = (category, page = 1) => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=es-ES&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        setTotalResults(Math.min(response.total_results, API_LIMIT));
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.error(err));
  }, [category, page]);

  return { movies, totalResults, loading };
};

export const useMovie = (id) => {
  const [movie, setMovie] = useState();
  const [trailer, setTrailer] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`, options)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=es-MX`,
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setTrailer(
          response.results.find((video) => video.type === "Trailer")?.key
        )
      )
      .catch((err) => console.error(err));
  }, [id]);

  return { movie, trailer, loading };
};

export const useSearch = (query, page = 1) => {
  const [movies, setMovies] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [totalResults, setTotalResults] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(id);
  }, [query, setDebouncedQuery]);

  useEffect(() => {
    if (!debouncedQuery) {
      setMovies([]);
      return;
    }
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${debouncedQuery}&include_adult=false&language=es-MX&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        setTotalResults(response.total_pages);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.error(err));
  }, [debouncedQuery, page]);

  return { movies, totalResults, loading };
};
