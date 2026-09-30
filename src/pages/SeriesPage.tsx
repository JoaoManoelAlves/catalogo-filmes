import { useEffect, useState } from "react";
import type { ShowsTypes } from "../types/showsTypes";
import { Link } from "react-router";
export default function SeriesPage() {
  const [shows, setShows] = useState<ShowsTypes[] | null>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function searchShows() {
      try {
        setLoading(true);
        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.log(error);
        setError("Erro ao buscar os shows.");
      } finally {
        setLoading(false);
      }
    }
    searchShows();
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h1>Catálogo de Séries</h1>
      {loading && <p>Carregando séries...</p>}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-3 gap-2">
        {shows &&
          shows.map((show) => (
            <div
              key={show.id}
              className="w-80 h-110 bg-gray-200 rounded-lg shadow-md p-4 mb-4  flex flex-col items-center justify-center "
            >
              <div className="w-[90%] h-[90%] flex flex-col justify-start items-center gap-2 mb-2">
                <img src={show.image.medium} alt="" className="w-[70%] h-[90%]" />
                <h2>{show.name}</h2>
                <span>{show.genres.join(", ")}</span>
              </div>
              <Link to={`/series/${show.id}`} 
            className="w-30 h-11 bg-[#a3e635] text-white rounded flex items-center justify-center hover:bg-[#4ade80]">Ver detalhes</Link>
            </div>
          ))}
      </div>
    </div>
  );
}
