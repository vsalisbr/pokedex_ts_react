import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #3D7DCA; /* Um azul semelhante ao usado nos jogos Pokemon */
  color: white;
`;

export const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const User = styled.h2`
  font-size: 20px;
`;

export const PokemonLogo = styled.img`
  width: 100px;
  height: auto;
`;