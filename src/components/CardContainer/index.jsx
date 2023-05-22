import Card from "../Card"
import styled from "styled-components"
import variables from "../../utils/variables/variables"
import colors from "../../utils/style/colors"

const CardContainerStyled = styled.div`
    background: ${colors.fourth};
    border-radius: 25px;
    padding: 50px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        background: ${colors.secondary};
        border-radius: 0px;
        padding: 0px;
	}
`

function CardContainer() {
    return(
        <CardContainerStyled>
            <Card />
        </CardContainerStyled>
    )
}

export default CardContainer