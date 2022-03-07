import "./App.css";
import { useState, useEffect } from "react";

function SinglePokemon({ singleUrl, setSingleUrl, teamArr, setTeamArr }) {
  const [singleData, setSingleData] = useState({});
  const [genusData, setGenusData] = useState("");

  useEffect(() => {
    fetch(singleUrl)
      .then((response) => response.json())
      .then((data) => setSingleData(data))
      .catch(() => console.log("oops error"));
  }, [singleUrl]);

  function addToTeam(pokemon) {
    const teamArrCopy = [...teamArr];
    teamArrCopy.push(pokemon);
    setTeamArr(teamArrCopy);
  }
  function handleClick(event) {
    event.preventDefault();
    addToTeam(singleData);
  }

  const pokemonType = (data) => {
    if (data.length > 1) {
      return data[0].type.name + " " + data[1].type.name;
    } else {
      return data[0].type.name;
    }
  };


  useEffect(() => {
    if (singleData.species !== undefined) {
      fetch(singleData.species.url)
        .then((response) => response.json())
        .then((data) => setGenusData(data.genera[2].genus))
        .catch(() => console.log("oops error"));
    }
  }, [singleData]);

 
  if (singleData.species === undefined) {
    return <div>loading</div>;
  } else {
    return (
      <div className="singlePokemon">
        <div className="singleBox">
          <div className="singleImages">
            <img src={singleData.sprites.front_default} />
            <img src={singleData.sprites.front_shiny} />
          </div>
          <p className="name">{singleData.species.name}</p>

          <p>Height: {singleData.height}</p>
          <p>Weight: {singleData.weight}</p>
          <p>Type: {pokemonType(singleData.types)}</p>

          <p>{genusData}</p>
          <button onClick={handleClick}>Add to Team</button>
        </div>
      </div>
    );
  }
}

export default SinglePokemon;
