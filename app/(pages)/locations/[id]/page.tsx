import CharactersList from "@/app/_components/CharactersList";
import GetCharacter from "@/lib/services/GetCharacter";
import GetLocation from "@/lib/services/GetLocation";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const location = await GetLocation(Number(id));

  const residents = await Promise.all(
    location.residents.map(async (resident) => {
      return GetCharacter(resident);
    })
  );

  return (
    <section>
      <h1 className="mb-2 flex items-baseline font-semibold text-2xl gap-2">
        {location.name}
      </h1>

      <div className="text-sm flex flex-col gap-1">
        <span className="text-gray-400 font-normal">Type: {location.type}</span>
        <span className="text-gray-400">Dimension: {location.dimension}</span>
      </div>

      <section className="mt-4 mb-10">
        <p className="mb-2">Residents</p>
        <CharactersList characters={residents} />
      </section>
    </section>
  );
}
