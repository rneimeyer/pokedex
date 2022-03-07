import AllPokemon from './AllPokemon';
import './App.css';
import SinglePokemon from './SinglePokemon';
import {useState, useEffect} from 'react';

function Pokedex({ teamArr, setTeamArr }) {

  const [singleUrl, setSingleUrl] = useState('https://pokeapi.co/api/v2/pokemon/1/')
    

  return (
    <div className="pokedex">
        <AllPokemon setSingleUrl={setSingleUrl} singleUrl={singleUrl} />
        <SinglePokemon singleUrl={singleUrl} setSingleUrl={setSingleUrl} teamArr={teamArr} setTeamArr={setTeamArr} />
        <div className="pokeball"></div>
    </div>
  );
}

export default Pokedex;
