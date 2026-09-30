import {createContext} from "react"
import type { ShowsTypes } from "../types/showsTypes";

export type FavoritesContext = {
    addFavorite: (show: ShowsTypes) => void;
    removeFavorite: (showId: number) => void;
    countFavorites: () => number;
    favoritesShows: ShowsTypes[];
}

export const FavoritesContext = createContext<FavoritesContext>(
    {} as FavoritesContext,
);