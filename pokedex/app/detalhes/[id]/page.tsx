export default async function detalhesPokemon(param) {

    const paramReal = await param.params;
    const id = paramReal.id;

    const apiBruto = await fetch(
        `https://pokemon-origins.gitlab.io/api/pokemons/EN/${id}/`
    );

    const Api = await apiBruto.json();

    return (
        
<div className="bg-blue-200 p-8 rounded-3xl mx-20 mt-10 shadow-xl">

    <div className="bg-blue-300 p-8 rounded-3xl">
        
        <div className="grid grid-cols-2 gap-10">

            {/* LADO ESQUERDO */}
            <div className="text-center">

                <div className="mb-5">
                    <p className="text-xl font-bold text-gray-600">
                        #{Api.id}
                    </p>

                    <h1 className="text-5xl font-bold capitalize">
                        {Api.name}
                    </h1>
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
                        {Api.type_1_id}
                    </span>

                    {Api.type_2_id != null && (
                        <span className="bg-white px-4 py-2 rounded-full ml-2">
                            {Api.type_2_id}
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