import AddToFavorites from "@/app/_components/AddToFavorites";
import Avatar from "@/app/_components/Avatar";
import Badge from "@/app/_components/Badge";
import { GetCharacterById } from "@/lib/services/GetCharacterById";
import GetEpisode from "@/lib/services/GetEpisode";
import Status from "./_components/Status";
import { Card, CardContent, CardHeader } from "@/app/_components/Card";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const character = await GetCharacterById(Number(id));
  const episodes = await Promise.all(
    character.episode.map(async (episode) => await GetEpisode(episode))
  );

  const firstEpisodes = episodes.slice(0, 5);

  return (
    <Card>
      <CardHeader className="relative flex flex-nowrap gap-6">
        <Avatar src={character.image} alt={character.name} />

        <div className="flex flex-col">
          <h1 className="mb-2 flex items-baseline font-semibold text-2xl gap-2">
            {character.name}
          </h1>
          <Status status={character.status} />
          <AddToFavorites id={character.id} type="character" />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <span className="flex flex-col gap-1">
          <span className="text-sm font-bold text-gray-400">Gender</span>
          {character.gender}
        </span>

        <span className="flex flex-col gap-1">
          <span className="text-sm font-bold text-gray-400">Origin</span>
          {character.origin.name}
        </span>

        <span className="flex flex-col gap-1">
          <span className="text-sm font-bold text-gray-400">
            Last known location
          </span>
          {character.location.name}
        </span>

        <span className="flex flex-col gap-1">
          <span className="text-sm font-bold text-gray-400">Episodes</span>

          <div className="flex gap-2">
            {firstEpisodes.map((episode) => (
              <Badge key={episode.id}>{`Ep. ${episode.id}`}</Badge>
            ))}
            <Badge>{`+ ${episodes.length - 5} more`}</Badge>
          </div>
        </span>
      </CardContent>
    </Card>
  );
}
