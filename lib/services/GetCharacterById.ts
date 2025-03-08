import { Character } from "../types";

export async function GetCharacterById(id: number ): Promise<Character> {
  const endpoit = process.env.NEXT_PUBLIC_API_ENDPOINT || process.env.API_ENDPOINT;

  const response = await fetch(`${endpoit}/character/${id}`);
  const character = await response.json();

  return character;
}