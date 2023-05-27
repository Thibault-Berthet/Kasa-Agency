/* ------------ Code REACT pour le composant TitleLocation ------------*/

import styled from "styled-components"
import colors from "../../utils/style/colors"
import variables from "../../utils/variables/variables"

const TitleLocationContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const TitleStyled = styled.h1`
    margin: 0;
    padding: 0;
    color: ${colors.primary};
    font-size: 36px;
    font-weight: 500;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 18px;
	}
`
const LocationStyled = styled.h2`
    margin-top: 0px;
    padding: 0;
    color: ${colors.primary};
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 27px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 14px;
        margin-top: 5px;
        margin-bottom: 12px;
	}
`
function TitleLocation(props) {
    return (
        <TitleLocationContainer>
            <TitleStyled>
                {props.title}
            </TitleStyled>
            <LocationStyled>
                {props.location}
            </LocationStyled>
        </TitleLocationContainer>
    )
}

export default TitleLocation