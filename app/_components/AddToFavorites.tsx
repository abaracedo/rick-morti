"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "../_context/FavoritesContext";
import clsx from "clsx";
import { MouseEvent } from "react";

export default function AddToFavorites({
  id,
  type,
}: {
  id: number;
  type: "character" | "episode";
}) {
  const {
    isCharacterFavorite,
    isEpisodeFavorite,
    toggleFavoriteCharacter,
    toggleFavoriteEpisode,
  } = useFavorites();

  const isFavorite =
    type === "character" ? isCharacterFavorite(id) : isEpisodeFavorite(id);
  const toggle =
    type === "character" ? toggleFavoriteCharacter : toggleFavoriteEpisode;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(id);
  };

  return (
    <button onClick={handleClick} className="absolute top-5 right-4">
      <Heart
        className={clsx(
          "h-5 w-5 transition-colors",
          isFavorite ? "fill-red-500 text-red-500" : ""
        )}
      />
    </button>
  );
}
