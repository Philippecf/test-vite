type PokemonCard = {
  name: string;
  imgSrc: string;
}

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
      <figure className= {`${pokemon.name}`}>
        <img src={pokemon.imgSrc} alt={pokemon.name} className="fond-pokemon"/>
        <figcaption className="name-pokemon">{pokemon.name}</figcaption>
      </figure>
    );
  }
}

export default PokemonCard;
