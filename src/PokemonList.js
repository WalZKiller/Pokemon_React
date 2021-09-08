import React from 'react';

export default function PokemonList ({ pokemon }) {

    fetch('https://pokeapi.co/api/v2/pokemon'
        ).then()
    return (
        <div>
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}