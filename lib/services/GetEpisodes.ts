import type { Episode, Pager } from "../types";

type EpisodesList = {
  pager: Pager;
  results: Episode[];
}

export default async function GetEpisodes(page: number = 1): Promise<EpisodesList> {
  const response = await fetch(`${process.env.API_ENDPOINT}/episode?page=${page}`);
  const { info, results } = await response.json();

  return {
    pager: {
      current: page,
      total: info.pages,
      hasNext: info.next != undefined,
      hasPrev: info.prev != undefined,
    },
    results,
  };
}