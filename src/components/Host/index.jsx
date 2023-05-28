/* ------------ Code REACT pour le composant Host ------------*/

import styled from "styled-components"
import colors from "../../utils/style/colors"
import variables from "../../utils/variables/variables"

// CSS des différents éléments
const HostContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        align-items: center;
	}
`
const NameStyled = styled.h2`
    color: ${colors.primary};
    font-size: 18px;
    font-weight: 500;
    max-width: 110px;
    text-align: end;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 12px;
        max-width: 70px;
	}
`
const PictureStyled = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50px;
    object-fit: cover;
    margin-left: 10px;
    margin-bottom: 27px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        height: 32px;
        width: 32px;
        margin-bottom: 0px;
	}
`
// Récupération des informations via les props
function Host(props) {
    return (
        <HostContainer>
            <NameStyled>
                {props.host.name}
            </NameStyled>
            <PictureStyled
                src={props.host.picture}
                alt="Photo de profil du propriétaire du logement"
            />
        </HostContainer>
    )
}

export default Host