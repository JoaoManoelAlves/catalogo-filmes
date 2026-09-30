import { useContext } from "react";
import { Link } from "react-router";
import { FavoritesContext } from "../context/FavoritesContext";

export default function NavBar() {

  const {countFavorites} = useContext(FavoritesContext)
  return (
    <>
      <nav className="w-full h-20 bg-[#075985] flex flex-row items-center justify-center gap-4 text-white font-4xl">
        <Link to="/series">Series</Link>
        <Link to="/favorites">Favoritos({countFavorites()})</Link>
      </nav>
    </>
  );
}
