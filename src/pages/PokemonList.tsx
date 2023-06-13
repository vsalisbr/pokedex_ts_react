import { ReactElement, useContext } from 'react';
import Header from '../components/Header';
import PokemonContext from '../context/PokemonContext';
import { Pokemon } from '../types/PokemonTypes';
import { PokemonContainer, PokemonItem } from './PokemonListCSS';

const PokemonList = (): ReactElement => {
    const context = useContext(PokemonContext);

    return (
        <>
            <Header />
            <PokemonContainer>
        {context.pokemonList.map((pokemon: Pokemon) => {
            const id = pokemon.url.split('/')[6];
            return (
                <PokemonItem className="pokemon-item" key={id} to={`/pokemon/${id}`}>
                    <p>{pokemon.name}</p>
                    <p>{("00" + id).slice(-3)}</p>
                </PokemonItem>
          )
        })
        }
      </PokemonContainer>
        </>
    )
};

export default PokemonList;