import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import Header from "../components/Header";
import { HeaderPokemon, PokedexContainer, PokedexItem, PokemonImage, PokemonName } from "./PokedexListCSS";

function CapturedPokemonList() {

    const { pokedex } = useContext(PokemonContext);

    return (
        <>
            <Header />
            <HeaderPokemon>Captured Pokemon</HeaderPokemon>
            <PokedexContainer>

                {pokedex && pokedex.map((pokemon) => {
                    console.log(pokemon);
                    return (
                        <PokedexItem key={pokemon.id}>
                            <picture className={pokemon.type}>
                                <PokemonImage className="pokedex-image" src={pokemon.sprite} />
                            </picture>
                            <PokemonName>{pokemon.name}</PokemonName>

                        </PokedexItem>
                    )
                })}
            </PokedexContainer>
        </>
    )
}

export default CapturedPokemonList;