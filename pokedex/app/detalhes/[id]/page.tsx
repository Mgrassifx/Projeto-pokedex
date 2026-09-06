import Link from "next/link";

export default async function detalhesPokemon(param) {

    const paramReal = await param.params;
    const id = paramReal.id;

    const apiBruto = await fetch(
        `https://pokemon-origins.gitlab.io/api/pokemons/EN/${id}/`
    );

    const Api = await apiBruto.json();

    const tiposBruto = await fetch(
    "https://pokemon-origins.gitlab.io/api/types/EN/"
    );

    const Tipos = await tiposBruto.json();

    const tipo1 = Tipos.find(
        (tipo) => tipo.id === Api.type_1_id
    );

    const tipo2 = Tipos.find(
        (tipo) => tipo.id === Api.type_2_id
    );

    console.log(tipo1);
    console.log(tipo2);
    return (
        
        <div className="bg-blue-200 p-12 rounded-3xl mx-20 mt-20 shadow-xl">

            <div className="bg-blue-300 p-10 rounded-3xl">
                
                <div className="grid grid-cols-2 gap-10">

                    {/* LADO ESQUERDO */}
                    <div className="text-center">

                        <div className="mb-5 grid grid-cols-3">
                            <Link href={`/pokemon`}>
                                <p className="text-2xl p-4 w-25 rounded-3xl text-white bg-blue-900"> 
                                    <strong>Voltar</strong>
                                </p>
                            </Link>

                            <h1 className="text-5xl capitalize rounded-3xl bg-white">
                                <strong>{Api.name}</strong>
                            </h1>

                            <p className="text-xl font-bold text-gray-600">
                                #{Api.id}
                            </p>


                        </div>

                        <div className="flex justify-center mb-5">
                            <img
                                className="w-64 h-64 object-contain"
                                src={`https://pokemon-origins.gitlab.io/api/images/pokemons/${Api.id}.png`}
                                alt={Api.name}
                            />
                        </div>

                        <div className="bg-blue-200 rounded-2xl p-5">
                            <h3 className="font-bold text-2xl mb-2">
                                Tipo
                            </h3>

                            <span className="bg-white px-4 py-2 rounded-full">
                                {tipo1.name}
                            </span>

                            {Api.type_2_id != null && (
                                <span className="bg-white px-4 py-2 rounded-full ml-2">
                                    {tipo2.name}
                                </span>
                            )}
                        </div>

                    </div>


                    {/* LADO DIREITO */}
                    <div>

                        {/* ALTURA E PESO */}
                        <div className="grid grid-cols-2 gap-5 mb-8">

                            <div className="bg-blue-200 rounded-2xl p-5 text-center">
                                <h3 className="font-bold text-xl">
                                    Altura
                                </h3>

                                <p className="text-2xl">
                                    {Api.height}
                                </p>
                            </div>

                            <div className="bg-blue-200 rounded-2xl p-5 text-center">
                                <h3 className="font-bold text-xl">
                                    Peso
                                </h3>

                                <p className="text-2xl">
                                    {Api.weight}
                                </p>
                            </div>

                        </div>


                        {/* DESCRIÇÃO */}
                        <div className="bg-blue-200 rounded-2xl p-5 mb-8">

                            <h3 className="font-bold text-2xl mb-3">
                                Descrição
                            </h3>

                            <p className="text-lg leading-relaxed">
                                {Api.description}
                            </p>

                        </div>


                        {/* ESTATÍSTICAS */}
                        <div className="bg-blue-200 rounded-2xl p-5">

                            <h3 className="font-bold text-2xl mb-5">
                                Estatísticas
                            </h3>

                            <div className="mb-5">

                                <div className="flex justify-between mb-1">
                                    <h4 className="font-bold">
                                        HP
                                    </h4>

                                    <span>
                                        {Api.base_hp}
                                    </span>
                                </div>

                                <div className="w-full h-5 bg-gray-100 rounded-full">
                                    <div
                                        className="h-5 bg-green-500 rounded-full"
                                        style={{ width: `${(Api.base_hp / 200) * 100}%` }}
                                    ></div>
                                </div>

                            </div>

                            <div className="mb-5">

                                <div className="flex justify-between mb-1">
                                    <h4 className="font-bold">
                                        Ataque
                                    </h4>

                                    <span>
                                        {Api.base_attack}
                                    </span>
                                </div>

                                <div className="w-full h-5 bg-gray-100 rounded-full">
                                    <div
                                        className="h-5 bg-red-500 rounded-full"
                                        style={{ width: `${(Api.base_attack / 200) * 100}%` }}
                                    ></div>
                                </div>

                            </div>


                            
                            <div>

                                <div className="flex justify-between mb-1">
                                    <h4 className="font-bold">
                                        Defesa
                                    </h4>

                                    <span>
                                        {Api.base_defense}
                                    </span>
                                </div>

                                <div className="w-full h-5 bg-gray-100 rounded-full">
                                    <div
                                        className="h-5 bg-blue-500 rounded-full"
                                        style={{ width: `${(Api.base_defense / 200) * 100}%` }}
                                    ></div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}