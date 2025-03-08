import type { Character } from "@/lib/types";
import Link from "next/link";
import Avatar from "./Avatar";

export default function CharactersList({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <ul className="flex flex-nowrap overflow-x-scroll gap-4 h-auto">
      {characters.map((character) => (
        <li key={character.id}>
          <Link href={`/characters/${character.id}`}>
            <Avatar
              className={character.status === "Dead" ? "grayscale" : ""}
              src={character.image}
              alt={character.name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
