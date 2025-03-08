"use client";

import Badge from "@/app/_components/Badge";
import Button from "@/app/_components/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/Card";
import { useFavorites } from "@/app/_context/FavoritesContext";
import { GetCharacterById } from "@/lib/services/GetCharacterById";
import type { Character } from "@/lib/types";
import { Trash } from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

export default function Favorites() {
  const { favoriteCharacters, favoriteEpisodes, clearAll } = useFavorites();
  const total = favoriteCharacters.length + favoriteEpisodes.length;
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchCharacters() {
      const characters = await Promise.all(
        favoriteCharacters.map(async (id) => await GetCharacterById(id))
      );

      console.log({ favoriteCharacters });

      setCharacters(characters);
    }

    fetchCharacters();
  }, [favoriteCharacters]);

  console.log(characters);

  if (total === 0) return;

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Favorites</CardTitle>
        <p className="text-gray-500 text-sm">
          Your favorites episodes and characters
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {favoriteCharacters.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">
              Your Characters ({favoriteCharacters.length})
            </h4>

            <div className="flex flex-wrap gap-2">
              {characters.map((character) => (
                <Link key={character.id} href={`/characters/${character.id}`}>
                  <Badge>{character.name}</Badge>
                </Link>
              ))}
            </div>
          </div>
        )}

        {favoriteEpisodes.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">
              Your Episodes ({favoriteEpisodes.length})
            </h4>

            <div className="flex flex-wrap gap-2">
              <Suspense fallback={<Badge>Loading...</Badge>}>
                {favoriteEpisodes.map((id) => (
                  <Link key={id} href={`/episodes/${id}`}>
                    <Badge>Episode {id}</Badge>
                  </Link>
                ))}
              </Suspense>
            </div>
          </div>
        )}

        <Button
          className="mt-4 flex flex-wrap gap-2 items-center justify-center"
          variant="danger"
          onClick={clearAll}
        >
          <Trash size={20} />
          Clear all
        </Button>
      </CardContent>
    </Card>
  );
}
