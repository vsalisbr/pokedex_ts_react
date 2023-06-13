import styled from 'styled-components';
import { Link } from "react-router-dom";

export const PokemonContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #F0F0F0; /* Cor de fundo mais clara e neutra */
`;

export const PokemonItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  width: 200px;
  text-decoration: none;
  color: #303943; /* Cor de texto escura para lembrar as cores do jogo */
  border: 2px solid #3D7DCA; /* Bordas azuis para lembrar a cor da Pokebola */
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); /* Adicionando um leve efeito de sombra para dar profundidade */
  transition: all 0.3s ease;
  background: #ffffff;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    border-color: #FFCB05; /* Bordas amarelas ao passar o mouse para dar uma sensação de interatividade */
  }

  p {
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    text-align: center;
    font-size: 18px;
  }

  p:first-child {
    margin-bottom: 10px;
    font-weight: 600;
    color: #303943;
  }

  p:last-child {
    font-size: 14px;
    color: #6c757d;
  }
`;