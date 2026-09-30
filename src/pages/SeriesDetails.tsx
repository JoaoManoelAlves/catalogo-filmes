import { useContext, useEffect, useState } from "react";
import type { ShowsTypes } from "../types/showsTypes";
import { useParams } from "react-router";
import { FavoritesContext } from "../context/FavoritesContext";

export default function SeriesDetails() {
  const { id } = useParams<{ id: string }>();
  const { addFavorite } = useContext(FavoritesContext);

  const [showDetails, setShowDetails] = useState<ShowsTypes | null>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function searchShows() {
      try {
        setLoading(true);
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShowDetails(data);
      } catch (error) {
        console.log(error);
        setError("Erro ao buscar o filme.");
      } finally {
        setLoading(false);
      }
    }
    searchShows();
  }, [id]);

  const addFavoriteShow = () => {
    if (!showDetails) return;
    addFavorite(showDetails);
  };

  /* O sumário da API vem no padrão html que o React não renderiza corretamente, então essa função limpa o html para string comum */
  function stripHtml(html: string | null | undefined): string {
    if (!html) return "";
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent ?? "";
  }
  return (
    <div className="w-full flex flex-col items-center gap-6 p-6">
      {loading && <p className="text-gray-600">Carregando séries...</p>}
      {error && (
        <p className="bg-red-100 text-red-700 rounded-lg px-4 py-2">{error}</p>
      )}

      {showDetails && (
        <div className="w-full max-w-5xl bg-gray-200 rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-8">
          {showDetails.image?.original && (
            <div className="md:w-1/3 shrink-0">
              <img
                src={showDetails.image.original}
                alt={showDetails.name}
                className="w-full rounded-lg shadow-md object-cover"
              />
            </div>
          )}

          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-3xl font-bold text-[#075985]">
              {showDetails.name}
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#075985] text-white text-sm rounded-full px-3 py-1">
                {showDetails.language}
              </span>
              {showDetails.genres.map((genre) => (
                <span
                  key={genre}
                  className="bg-white text-[#075985] text-sm rounded-full px-3 py-1"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Descrição</h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {stripHtml(showDetails.summary)}
              </p>
            </div>

            <button
              onClick={addFavoriteShow}
              className="mt-auto w-full md:w-60 h-11 bg-[#a3e635] text-white font-semibold rounded flex items-center justify-center hover:bg-[#4ade80] transition-colors cursor-pointer"
            >
              Adicionar aos favoritos
            </button>
          </div>
        </div>
      )}
    </div>
  );
}