import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PokemonList from './pages/PokemonList';

function App(): ReactElement {
  return (
    <Routes>
      <Route path='/' element={ <PokemonList /> } />
    </Routes>
  );
}

export default App;
