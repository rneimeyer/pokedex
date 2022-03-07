import "./App.css";
import { useState, useEffect } from "react";

const url = "https://pokeapi.co/api/v2/pokemon";

function AllPokemon({ singleUrl, setSingleUrl }) {
  const [pokeData, setPokeData] = useState([]);
  // const [single, setSingle] = useState("")

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokeData(data.results))
      .catch(() => console.log("oops error"));
    // fetch(singleUrl)
    // .then((response) => response.json())
    //   .then((data) => setSingleData(data))
    //   .catch(() => console.log("oops error"));
  });

  const pokeList = pokeData.map((poke, index) => {
    const handleClick = (event) => {
      event.preventDefault();
      setSingleUrl(poke.url);
    };
    return (
      <div key={index} className="poke" onClick={handleClick}>
        <p className="name">{poke.name}</p>
        <img
          className="smallPokeball"
          src="https://www.pngarts.com/files/4/Pokeball-PNG-Image-Transparent-Background.png"
          alt="pokeball"
        />
      </div>
    );
  });
  // setSingle(poke.url)
  return <div className="allPokemon">{pokeList}</div>;
}

export default AllPokemon;
