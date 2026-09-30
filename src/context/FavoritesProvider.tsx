import { FavoritesContext } from "./FavoritesContext";
import { useState, type ReactNode } from "react";
import type { ShowsTypes } from "../types/showsTypes";

export default function FavoritesProvider({children}: {children: ReactNode}){

    const [favoritesShows, setFavoritesShows] = useState<ShowsTypes[]>([])

    const addFavorite = (show: ShowsTypes) => {
        setFavoritesShows((prevState) => {
            const exists = prevState.find((item) => item.id === show.id);

            /* Se o filme existir, nada acontece */
            if(exists) return prevState;
            /* Filme é no final adicionado */
            return [...prevState, show]
        })
    }

    const removeFavorite = (showId: number) => {
        setFavoritesShows((prevState) => {
            const exists = prevState.find((item) => item.id === showId);
            /* Filme não existe nos favoritos */
            if(!exists) return prevState;
            /* Filme é retirado dos favoritos */
            return prevState.filter((item) => item.id !== showId)
        })
    }

   const countFavorites = () => {return favoritesShows.length};

   return (
    <FavoritesContext.Provider value={{addFavorite, removeFavorite, countFavorites, favoritesShows}}>
        {children}
    </FavoritesContext.Provider>
   )
}