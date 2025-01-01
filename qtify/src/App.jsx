import { StyledEngineProvider } from "@mui/system";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGenres, fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";

function App() {
  const [data, setData] = useState({});

  const generateData = (key, callbackFn) => {
    callbackFn().then((resp) => {
      setData((prevState) => {
        return { ...prevState, [key]: resp };
      });
    });
  };

  useEffect(() => {
      generateData('topAlbums', fetchTopAlbums);
      generateData('newAlbums', fetchNewAlbums);
      generateData('songs', fetchSongs);
      generateData('genres', fetchGenres);
  }, []);

  const { newAlbums = [], topAlbums = [], songs = [], genres = [] } = data;

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar searchData="" />
        <Outlet context={{ data: { newAlbums, topAlbums, songs, genres } }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
