import { Routes } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLink = styled(Routes)`
    padding: 15px
    color: ${colors.primary}
    text-decoration: none
    font-size: 18px
`

function Header() {
    return (
        <nav>
            <ul>
                <li><StyledLink to="/">Accueil</StyledLink></li>
                <li><StyledLink to="/About">À Propos</StyledLink></li>
            </ul>
        </nav>
    )
}

export default Header