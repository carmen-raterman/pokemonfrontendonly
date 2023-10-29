import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/");

      console.log(response.data);
      setPokemon(response.data);
    };

    getData();
  }, []);

  return (
    <>
      <ul> {pokemon/Map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))} 
      </ul>
    </>
  )
}

export default App;
