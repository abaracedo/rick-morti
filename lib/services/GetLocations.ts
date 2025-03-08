import type { Location, Pager } from "../types";

type LocationsList = {
  pager: Pager;
  results: Location[];
}

export default async function GetLocations(page: number = 1): Promise<LocationsList> {
  const response = await fetch(`${process.env.API_ENDPOINT}/location?page=${page}`);
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