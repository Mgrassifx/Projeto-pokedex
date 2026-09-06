export default async function detalhesPokemon(param) {

    const paramReal = await param.params;
    const id = paramReal.id;

    const apiBruto = await fetch(
        `https://pokemon-origins.gitlab.io/api/pokemons/EN/${id}/`
    );

    const Api = await apiBruto.json();

    return (

        <div>

            <div>
                <p> # {Api.id} </p>
                <h1> {Api.name} </h1>
            </div>

            <div>
                <p>
                    <img src={`https://pokemon-origins.gitlab.io/api/images/pokemons/${Api.id}.png`}  
                    alt={Api.name} />
                </p>
                <div>
                    <p>{Api.type_1_id}</p>
                    <p>{Api.type_2_id == null ? `` : `${Api.type_2_id}`}</p>
                </div>
            </div>


            <div>
                <div>
                    <h3>Altura</h3>
                    <p>{Api.height}</p>
                </div>  

                <div>
                    <h3>Peso</h3>
                    <p>{Api.weight}</p>
                </div>
            </div>

            <div>
                <h2>Descrição</h2>
                <p>{Api.description}</p>
            </div>

            <div>
                <h2>Estatísticas</h2>

                <div>
                    <p>HP</p>

                    <div className="w-50 h-5 bg-gray-300">
                        <div className="h-5 bg-green-500"
                        style={{width : `${Api.base_hp}%`}}>
                        </div>
                    </div>

                    <span>{Api.base_hp}</span>
                </div>

                <div>
                    <p>Ataque</p>

                    <div className="w-50 h-5 bg-gray-300">
                        <div className="h-5 bg-red-500"
                        style={{width : `${Api.base_attack}%`}}>
                        </div>
                    </div>
                    
                    <span>{Api.base_attack}</span>
                </div>

                
                 <div>
                    <p>Defesa</p>

                    <div className="w-50 h-5 bg-gray-300">
                        <div className="h-5 bg-blue-500"
                        style={{width : `${Api.base_defense}%`}}>
                        </div>
                    </div>
                    
                    <span>{Api.base_defense}</span>
                </div>
            </div>
            
        </div>
    )
}