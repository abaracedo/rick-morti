import CharactersList from "@/app/_components/CharactersList";
import GetCharacter from "@/lib/services/GetCharacter";
import GetEpisodeById from "@/lib/services/GetEpisodeById";
import Form from "./_components/Form";
import AddToFavorites from "@/app/_components/AddToFavorites";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const episode = await GetEpisodeById(Number(id));

  const characters = await Promise.all(
    episode.characters.map(async (character) => {
      return GetCharacter(character);
    })
  );

  return (
    <section className="relative">
      <h1 className="flex items-baseline font-semibold text-2xl gap-2">
        {episode.name}
        <small className="text-xs font-normal text-gray-400">
          ({episode.episode})
        </small>
      </h1>

      <AddToFavorites id={episode.id} type="episode" />
      <p className="mt-2 text-sm">Released at {episode.air_date}</p>

      <section className="mt-4 mb-10">
        <p className="mb-2">Characters in this episode</p>
        <CharactersList characters={characters} />
      </section>

      <Form />
    </section>
  );
}
