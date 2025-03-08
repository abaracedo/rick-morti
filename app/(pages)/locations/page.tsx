import Badge from "@/app/_components/Badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/Card";
import Pagination from "@/app/_components/Pagination";
import GetLocations from "@/lib/services/GetLocations";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations",
  description: "List of locations from Rick and Morty",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const { pager, results } = await GetLocations(Number(page) || 1);

  return (
    <section>
      <h1 className="mb-4 text-2xl">Loctions</h1>

      <div className="flex flex-col gap-2">
        {results.map((location) => (
          <Link key={location.id} href={`/locations/${location.id}`}>
            <Card>
              <CardHeader>
                <CardTitle>{location.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between items-end">
                <div className="text-sm flex flex-col gap-1">
                  <span className="text-gray-400 font-normal">
                    Type: {location.type}
                  </span>
                  <span className="text-gray-400">
                    Dimension: {location.dimension}
                  </span>
                </div>

                <Badge variant={location.residents.length > 0 ? "primary" : ""}>
                  {location.residents.length > 0
                    ? `${location.residents.length} residents`
                    : "No residents"}
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
