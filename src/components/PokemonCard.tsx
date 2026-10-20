function PokemonCard({pokemon}) {
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
