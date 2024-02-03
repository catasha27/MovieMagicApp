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

export const useMovies = (category, page = 1) => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=es-ES&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        setTotalResults(response.total_pages);
      })
      .catch((err) => console.error(err));
  }, [category, page]);

  return [movies, totalResults];
};

export const useMovie = (id) => {
  const [movie, setMovie] = useState();
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`, options)
      .then((response) => response.json())
      .then((response) => setMovie(response))
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

  return [movie, trailer];
};

export const useSearch = (query, page = 1) => {
  const [movies, setMovies] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [totalResults, setTotalResults] = useState(1);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(id);
  }, [query, setDebouncedQuery]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${debouncedQuery}&include_adult=false&language=es-MX&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        setTotalResults(response.total_pages);
      })
      .catch((err) => console.error(err));
  }, [debouncedQuery, page]);

  return [movies, totalResults];
};
