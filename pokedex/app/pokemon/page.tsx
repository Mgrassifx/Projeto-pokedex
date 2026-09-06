import Link from "next/link";

export default async function Pokemon() {
    const apiBruto = await fetch(
        "https://pokemon-origins.gitlab.io/api/pokemons/EN/"
    );

    const Api = await apiBruto.json();

    console.log(Api);

    return (
        <div className="grid grid-cols-3 text-center gap-10 m-5 ml-20 mr-20">
                {Api.map((pokemon) => (
                    <Link href={`/detalhes/${pokemon.id}`}
                     key={pokemon.name}>
                        <div
                            className="relative bg-blue-200 rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow"
                           
                            >
                            <span className="absolute top-3 right-4 text-gray-900 font-bold bg-blue-300 p-1 rounded-2xl">
                                #{pokemon.id}
                            </span>

                            <img
                                className="mx-auto"
                                src={`https://pokemon-origins.gitlab.io/api/images/pokemons/${pokemon.id}.png`}
                                alt={pokemon.name}
                            />

                            <p className="font-bold capitalize text-lg">
                                {pokemon.name}
                            </p>
                        </div>
                    </Link>

                ))}
        </div>
    );
}