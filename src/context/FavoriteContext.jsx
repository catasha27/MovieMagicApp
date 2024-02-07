import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const { get, set } = useLocalStorage();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    get("favorites") ? setFavorites(get("favorites")) : setFavorites([]);
  }, []);

  const addFav = (movie) => {
    const newFavs = [...favorites, movie];
    set("favorites", newFavs);
    setFavorites(newFavs);
  };

  const removeFav = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    set("favorites", updatedFavorites);
  };

  const isFav = (id) => {
    return favorites.some((movie) => movie.id === id);
  };

  const data = {
    favorites,
    addFav,
    removeFav,
    isFav,
  };

  return (
    <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
