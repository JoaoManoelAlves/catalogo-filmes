import { useContext } from "react";
import { Link } from "react-router";
import { FavoritesContext } from "../context/FavoritesContext";

export default function FavoritesShows() {
  const { favoritesShows, removeFavorite } = useContext(FavoritesContext);

  if (favoritesShows.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <p>Você ainda não tem séries favoritas.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h1>Minhas séries favoritas ({favoritesShows.length})</h1>
      <div className="grid grid-cols-3 gap-2">
        {favoritesShows.map((show) => (
          <div
            key={show.id}
            className="w-60 h-90 bg-gray-200 rounded-lg shadow-md p-4 mb-4 flex flex-col items-center justify-center"
          >
            <div className="w-[90%] h-[90%] flex flex-col justify-start items-center">
              <img
                src={show.image?.medium}
                alt={show.name}
                className="w-[70%] h-[90%]"
              />
              <h2>{show.name}</h2>
            </div>
            <Link
              to={`/series/${show.id}`}
              className="w-30 h-11 bg-[#a3e635] text-white rounded flex items-center justify-center hover:bg-[#4ade80]"
            >
              Ver detalhes
            </Link>
            <button
              onClick={() => removeFavorite(show.id)}
              className="w-30 h-11 mt-2 bg-red-500 text-white rounded flex items-center justify-center hover:bg-red-600"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}