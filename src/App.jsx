import "primeicons/primeicons.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import LatestReleases from "./components/LatestReleases.jsx";
import Populars from "./components/Populars.jsx";
import Search from "./components/Search.jsx";
import Favorites from "./components/Favorites.jsx";
import Detail from "./components/Detail.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
  const apiToken = import.meta.env.VITE_MOVIE_API_TOKEN;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest-movies" element={<LatestReleases />} />
        <Route path="/populars" element={<Populars />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
