/* ------------ Code REACT pour le composant ErrorPage ------------*/

import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import variables from "../../utils/variables/variables"

// CSS des différents éléments
const ErrorContainer = styled.div`
	display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ErrorNumber = styled.p`
	color: ${colors.primary};
    font-size: 288px;
    font-weight: 700;
    margin: 0px;
    margin-top: 170px;
    margin-bottom: 66px;
    padding: 0px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 96px;
        margin-top: 195px;
        margin-bottom: 11px;
	}
`
const ErrorText = styled.p`
    color: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    margin: 0px;
    padding: 0px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 18px;
	}
    
`
const ErrorStyledLink = styled(Link)`
    color: ${colors.primary};
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    margin-top: 182px;
    margin-bottom: 159px;
    &:hover {
        text-decoration-line: underline;
    }
    @media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 14px;
	}
`

function ErrorPage() {
    return (
        <ErrorContainer>
            <ErrorNumber>
                404
            </ErrorNumber>
            <ErrorText>
                Oups! La page que vous demandez n'existe pas.
            </ErrorText>
            <ErrorStyledLink to="/">
                Retourner sur la page d’accueil
            </ErrorStyledLink>
        </ErrorContainer>
    )
}

export default ErrorPage