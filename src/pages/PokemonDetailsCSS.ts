import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #F0F0F0;
  h2 {
    text-transform: uppercase;
    border-bottom: 2px solid #000;
    margin-bottom: 20px;
    padding-bottom: 2px;
  }
`;

export const DetailSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  background-color: #3D7DCA;  /* Cor inspirada na Pokebola */
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Sombra um pouco mais intensa */
  color: white; /* Texto branco para contrastar com o fundo azul */

  h2 {
    text-transform: uppercase;
    border-bottom: 2px solid #fff;
    margin-bottom: 60px;
    padding-bottom: 10px;
  }
`;

export const PictureContainer = styled.picture`
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 20px;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%; /* Deixa a imagem redonda, parecida com uma Pokebola */
  }
`;

export const CaptureButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #FF0000; /* Cor vermelha inspirada na Pokebola */
  border: none;
  border-radius: 5px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #CC0000; /* Um vermelho um pouco mais escuro no hover */
  }
  &:focus {
    outline: none;
  }
`;