import React, { useEffect, useState } from 'react';

//Pokemon list
import PokemonList from './PokemonList';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(
        (result) => {
        setPokemon(result);
      }
      ) 
    },[])

    return (
      <>
        {pokemon.map(p => (
          <div key={p}>
            {p}
          </div>
        ))}
      </>
    );
}

export default App;
