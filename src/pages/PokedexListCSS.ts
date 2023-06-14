import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
`;

export const HeaderPokemon = styled.header`
    background-color: #3D7DCA;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 2em;
`;

export const PokedexContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const PokedexItem = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 2px solid #3D7DCA;
    border-radius: 10px;
    background-color: #F0F0F0;

    animation: ${zoomIn} 0.5s ease-in-out;

    &:hover {
        animation: ${rotate} 2s infinite linear;
    }
`;

export const PokemonImage = styled.img`
    width: 100px;
    height: 100px;
`;

export const PokemonName = styled.p`
    font-size: 1.2em;
    font-weight: bold;
`;