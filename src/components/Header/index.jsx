/* ------------ Code REACT pour le composant Header ------------*/

import { Link, NavLink as BaseNavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import variables from '../../utils/variables/variables'
import logo from '../../assets/logo_kasa.svg'

// CSS des différents éléments
const StyledLink = styled(BaseNavLink)`
    padding-left: 3.5rem;
    color: ${colors.primary};
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    &:hover {
        text-decoration-line: underline;
    }
    &.active {
        text-decoration-line: underline;
    }
    @media screen and (max-width: ${variables.mobileResponsive}) {
        text-transform: uppercase;
        font-size: 12px;
        padding-left: 0.6rem;
	}
`
const HomeLogo = styled.img`
    height 68px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
		height 47px;
	}
`
const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
	align-items: center;
    margin: 5%;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <HomeLogo
                    src={logo}
                    alt="Image du mot kasa écrit K A S A de couleur rouge-rose sur fond blanc avec le premier a en forme de maison"
                />
            </Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </div>
        </HeaderContainer>
    )
}

export default Header