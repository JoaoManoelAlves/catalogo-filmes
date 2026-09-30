import { BrowserRouter, Route, Routes } from "react-router";
import SeriesPage from "./pages/SeriesPage";
import SeriesDetails from "./pages/SeriesDetails";
import NavBar from "./components/NavBar";
import FavoritesShows from "./pages/FavoriteShows";

function App(){
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/series/:id" element={<SeriesDetails />} />
        <Route path="/favorites" element={<FavoritesShows/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;