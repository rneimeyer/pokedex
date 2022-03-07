import './App.css';

function MyTeam({ teamArr, setTeamArr }) {

    const removePoke = (id) => {
        const teamArrCopy = [...teamArr];
        const filteredItems = teamArrCopy.filter((pokemon) => pokemon.id !== id);
        setTeamArr(filteredItems)
    }

    const team = teamArr.map((pokemon) => {
        return(
            <div key={pokemon.id} className="teamPoke">
                <img src={pokemon.sprites.front_default} />
                <p className="name">{pokemon.species.name}</p>
                <button onClick={() => removePoke(pokemon.id)}>Remove</button>
            </div>
        )

    })
    
  return (
    //   <div className="pokedex">
    //       <div className="allPokemon"></div>
    <div className="myTeam">
        {team}
    </div>
    // </div>
  );
}

export default MyTeam;

// add to an array and be able to remove from array