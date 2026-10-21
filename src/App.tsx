import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbizarre");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <nav>
        <button type="button" onClick={() => setPokemonName("bulbizarre")}>
          bulbizarre
        </button>
        <button type="button" onClick={() => setPokemonName("mew")}>
          mew
        </button>
      </nav>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
