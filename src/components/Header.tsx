import { ReactElement } from 'react';
import { HeaderContainer, PokemonLogo, TitleLink, User } from './HeaderCSS';

const Header = (): ReactElement => {
    return (
        <HeaderContainer>
            <TitleLink  to='/'>
                <h1>Pokedex</h1>
            </TitleLink >
            <User>NOMEDOUSUÁRIO</User>
            <PokemonLogo src="https://i.pinimg.com/originals/c7/d7/02/c7d70249300e5473a14ded83c694d242.png" />
        </HeaderContainer>
    )
}

export default Header;