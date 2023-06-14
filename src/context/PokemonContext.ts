import { createContext, Dispatch, SetStateAction } from 'react';
import { Pokemon, PokemonDetails } from '../types/PokemonTypes';

type GlobalContent = {
    pokemonList: Pokemon[],
    setPokemonList: Dispatch<SetStateAction<Pokemon[]>>,
    pokedex: PokemonDetails[],
    setPokedex: Dispatch<SetStateAction<PokemonDetails[]>>,  
}

const PokemonContext = createContext<GlobalContent>({
    pokemonList: [],
    setPokemonList: () => {[]},
    pokedex: [],
    setPokedex: () => {[]}
});

export default PokemonContext;