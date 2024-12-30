import { StyledEngineProvider } from "@mui/system";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const { newAlbums=[], topAlbums=[], songs=[], genres=[] } = {};

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
