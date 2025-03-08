import type { Location } from "../types";

export default async function GetLocation(id: number): Promise<Location> {
  const response = await fetch(`${process.env.API_ENDPOINT}/location/${id}`);
  const location = await response.json();

  return location;
}