export default async function detalhesPokemon(param) {

    const paramReal = await param.params;
    const id = paramReal.id;

    const apiBruto = await fetch(
        `https://pokemon-origins.gitlab.io/api/pokemons/EN/${id}/`
    );

    const Api = await apiBruto.json();

    return (
        
        
    )
}