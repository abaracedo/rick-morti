import type { Character } from "../types";

export default async function GetCharacter(url: string): Promise<Character> {
  const response = await fetch(url);

  return response.json();
}