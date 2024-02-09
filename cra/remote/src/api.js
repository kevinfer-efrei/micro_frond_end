function api() {
    const getPokemon = (pokemon) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
        type: "GET",
        }).then((res) => res.json());
    };

    return {
        getPokemon,
    };
}

export default api();