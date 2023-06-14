import { ReactElement, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PokemonList from './pages/PokemonList';
import PokemonDetails from './pages/PokemonDetails';
import PokedexList from './pages/PokedexList';
import PokemonContext from './context/PokemonContext';

function App(): ReactElement {
  const { pokemonList } = useContext(PokemonContext);

  return (
    <Routes>
      <Route path='/' element={ <PokemonList /> } />
      <Route path='/pokemon/:id' element={ <PokemonDetails pokemonList={pokemonList} /> } />
      <Route path='/pokedex' element={ <PokedexList /> } />
    </Routes>
  );
}

export default App;
