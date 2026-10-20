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

function PokemonCard() {
  const pokemon = pokemonList[1];
  if (pokemon.imgSrc == undefined) {
    return (
      <figure>
        <figcaption>{pokemon.name}</figcaption>
        <p>???</p>
      </figure>
    );
  } else {
    return (
      <figure>
        <figcaption>{pokemon.name}</figcaption>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      </figure>
    );
  }
}

export default PokemonCard;
