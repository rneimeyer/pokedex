import './App.css';
import { useState } from 'react';
import { Route, Link, Routes, Navigate } from "react-router-dom";
import Pokedex from './Pokedex';
import MyTeam from './MyTeam';

function App() {

  
  const [teamArr,setTeamArr] = useState([])

  const [pikachu, setPikachu] = useState(false);

const handleClick = () => {
    setPikachu((previousPikachu) => {
      return !previousPikachu;
    });
  };

  return (
    <div className="App">
      {/* <img className="topPikachu" src="https://clipart.world/wp-content/uploads/2021/01/Friendly-Pikachu-clipart-transparent.png"/> */}
      
      {pikachu ? (
        <img className='topPikachu' src='https://clipart.world/wp-content/uploads/2021/01/Friendly-Pikachu-clipart-transparent.png' alt='Pikachu' />
        ) : (
        <img className='topPikachu' src='https://freepngimg.com/thumb/pokemon/37475-6-pikachu-transparent-image.png' alt='Pikachu' />
        )}
      <nav>
        <Link to="/pokedex" className="link" onClick={handleClick}>Pokedex</Link>
        <img src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png" className="logo" />
        <Link to="/myteam" className="link" onClick={handleClick}>My Team</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to ='/pokedex' />} />
          <Route path="/home" element={<Navigate to ='/pokedex' />} />
          <Route path="/pokedex" element={<Pokedex teamArr={teamArr} setTeamArr={setTeamArr} />} />
          <Route path="/myteam" element={<MyTeam teamArr={teamArr} setTeamArr={setTeamArr} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
