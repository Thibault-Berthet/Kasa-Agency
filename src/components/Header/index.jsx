/* ------------ Code REACT pour le composant Header ------------*/

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import variables from '../../utils/variables/variables'
import logo from '../../assets/logo_kasa.svg'

const StyledLink = styled(Link)`
    padding-left: 3.5rem;
    color: ${colors.primary};
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    &:hover {
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
                <HomeLogo src={logo} />
            </Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </div>
        </HeaderContainer>
    )
}

export default Header