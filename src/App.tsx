import { BrowserRouter, Route, Routes } from "react-router";
import SeriesPage from "./pages/SeriesPage";
import SeriesDetails from "./pages/SeriesDetails";
import NavBar from "./components/NavBar";

function App(){
  return(
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/series/:id" element={<SeriesDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;