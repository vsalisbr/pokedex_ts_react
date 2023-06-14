import { ReactElement, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { POKE_URL } from '../services/fetchPokemon';
import { Pokemon, PokemonDetails } from '../types/PokemonTypes';
import Header from '../components/Header';
import PokemonContext from '../context/PokemonContext';
import { MainContainer, DetailSection, CaptureButton, PictureContainer } from './PokemonDetailsCSS';

type Props = {
    pokemonList: Pokemon[]
};

const PokemonDetail = (props: Props): ReactElement => {
    const { id } = useParams();
    console.log(id)
    console.log(props);
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const { pokedex, setPokedex } = useContext(PokemonContext);

    function handleCapturePokemon (pokemon: PokemonDetails) {
        if(pokedex.length <= 5) {
            
            setPokedex([...pokedex, pokemon]);
            alert('Pokemon Capturado!');
        } else {
            alert('Você pode ter no máximo 6 pokemons armazenados na sua Pokedex!');
        }
    }

    async function fetchPokemon (url: string) {
        const result = await fetch(url);
        const jsonResult = await result.json();
        console.log(jsonResult);
        setPokemon({
            id: jsonResult.id,
            name: jsonResult.name,
            ability: jsonResult.abilities[0].ability.name,
            baseExperience: jsonResult.base_experience,
            height: jsonResult.height,
            sprite: jsonResult.sprites.other['official-artwork']['front_default'],
            type: jsonResult.types[0].type.name
        })
    }

    useEffect(() => {
        fetchPokemon(`${POKE_URL}/${id}`);
    }, []);

    return (
        <>
            <Header />
            <MainContainer>{pokemon && (
                <>
                    <h2>{pokemon.name}</h2>
                    <div className="pokemon-detail">
                        <DetailSection>
                            <p>Ability: {pokemon.ability}</p>
                            <p>Base EXP: {pokemon.baseExperience}</p>
                            <p>Height: {pokemon.height}</p>
                        </DetailSection>
                        <PictureContainer className={pokemon.type}>
                            <img src={pokemon.sprite}></img>
                        </PictureContainer>
                    </div>
                    <CaptureButton 
                    type="button" 
                    disabled={ pokedex.some((pokemonData) => pokemonData.name === pokemon.name )}
                    onClick={() => handleCapturePokemon(pokemon)}
                    >
                        Capturar!
                    </CaptureButton>
                </>
            )}</MainContainer>
        </>
    );
}

export default PokemonDetail;