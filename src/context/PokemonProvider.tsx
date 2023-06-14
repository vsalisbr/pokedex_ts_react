import { ReactElement, useEffect, useState } from "react";
import PokemonContext from "./PokemonContext";
import { POKE_URL } from '../services/fetchPokemon';
import { Pokemon, PokemonDetails } from "../types/PokemonTypes";

type Props = {
    children: ReactElement
}

const PokemonProvider = ({ children }: Props) => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [pokedex, setPokedex] = useState<PokemonDetails[]>([]);

    async function fetchPokemon(url: string): Promise<void> {
        const result = await fetch(url);
        const jsonResult = await result.json();
        setPokemonList(jsonResult.results);
    } 

    useEffect(() => {
        fetchPokemon(POKE_URL);
    }, [])


    return (
        <PokemonContext.Provider value={{ pokemonList, setPokemonList, pokedex, setPokedex }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;