import type { Episode } from "../types";

export default async function GetEpisode(url: string ): Promise<Episode> {
  const response = await fetch(url);
  const episode = await response.json();

  return episode;
}