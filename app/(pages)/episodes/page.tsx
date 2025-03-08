import AddToFavorites from "@/app/_components/AddToFavorites";
import Badge from "@/app/_components/Badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/Card";
import Pagination from "@/app/_components/Pagination";
import GetEpisodes from "@/lib/services/GetEpisodes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Episodes",
  description: "List of episodes from Rick and Morty",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const { pager, results } = await GetEpisodes(Number(page) || 1);

  return (
    <section>
      <h1 className="mb-4 text-2xl">Episodes</h1>

      <div className="flex flex-col gap-2">
        {results.map((episode) => (
          <Link key={episode.id} href={`/episodes/${episode.id}`}>
            <Card className="relative">
              <CardHeader>
                <CardTitle>
                  {episode.name}{" "}
                  <small className="text-gray-400 text-xs font-normal">
                    ({episode.episode})
                  </small>
                </CardTitle>
                <AddToFavorites id={episode.id} type="episode" />
              </CardHeader>

              <CardContent className="flex justify-between">
                <span className="text-sm text-gray-400">
                  Air date: {episode.air_date}
                </span>
                <Badge variant="primary">
                  {episode.characters.length} characters
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Pagination pager={pager} />
    </section>
  );
}
