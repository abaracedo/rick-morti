"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type FavoritesContextType = {
  favoriteCharacters: number[];
  favoriteEpisodes: number[];
  toggleFavoriteCharacter: (id: number) => void;
  toggleFavoriteEpisode: (id: number) => void;
  isCharacterFavorite: (id: number) => boolean;
  isEpisodeFavorite: (id: number) => boolean;
  clearAll: () => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteCharacters, setFavoriteCharacters] = useState<number[]>([]);
  const [favoriteEpisodes, setFavoriteEpisodes] = useState<number[]>([]);

  const toggleFavoriteCharacter = (id: number) => {
    setFavoriteCharacters((prev) => {
      if (prev.includes(id)) {
        return prev.filter((characterId) => characterId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const toggleFavoriteEpisode = (id: number) => {
    setFavoriteEpisodes((prev) => {
      if (prev.includes(id)) {
        return prev.filter((episodeId) => episodeId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const isCharacterFavorite = (id: number) => {
    return favoriteCharacters.includes(id);
  };

  const isEpisodeFavorite = (id: number) => {
    return favoriteEpisodes.includes(id);
  };

  const clearAll = () => {
    setFavoriteCharacters([]);
    setFavoriteEpisodes([]);
  };

  const value = {
    favoriteCharacters,
    favoriteEpisodes,
    toggleFavoriteCharacter,
    toggleFavoriteEpisode,
    isCharacterFavorite,
    isEpisodeFavorite,
    clearAll,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
}
