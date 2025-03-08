import type { Episode } from "../types";

export default async function GetEpisodeById(id: number): Promise<Episode> {
  const response = await fetch(`${process.env.API_ENDPOINT}/episode/${id}`);
  const episode = await response.json();

  return episode;
}