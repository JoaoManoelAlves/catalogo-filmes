import { useEffect, useState } from "react";
import type { ShowsTypes } from "../types/showsTypes";
import { useParams } from "react-router";
export default function SeriesDetails() {
  const {id} = useParams<{ id: string}>();
  const [show, setShow] = useState<ShowsTypes | null>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function searchShows() {
      try {
        setLoading(true);
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.log(error);
        setError("Erro ao buscar o filme.");
      } finally {
        setLoading(false);
      }
    }
    searchShows();
  }, [id]);
  return (
    <div>
      {loading && <p>Carregando séries...</p>}
      {error && <p>{error}</p>}
      {show && (
        <div>
          <h1>{show.name}</h1>
          <p>{show.language}</p>
          <span>{show.genres.join(", ")}</span>
          <div>
            <h2>Descrição do Filme:</h2>
            <p>{show.summary}</p>
          </div>
          <div>
            <h2>Galeria de Imagens</h2>
          </div>
        </div>
      )}
    </div>
  );
}
