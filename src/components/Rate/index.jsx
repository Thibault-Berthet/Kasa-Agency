/* ------------ Code REACT pour le composant Rate ------------*/

import styled from "styled-components"
import colors from "../../utils/style/colors"
import starfull from "../../assets/star_full.svg"
import starempty from "../../assets/star_empty.svg"
import variables from "../../utils/variables/variables"

const RateContainer = styled.div`
@media screen and (max-width: ${variables.mobileResponsive}) {
	display: flex;
	align-items: center;
}
`
const StarFull = styled.img`
    color: ${colors.primary};
	margin-left: 15px;
	@media screen and (max-width: ${variables.mobileResponsive}) {
        height: 13px;
		width: 13px;
		margin-left: 0px;
		margin-right: 7px;
	}
`
const StarEmpty = styled.img`
    color: ${colors.fourth};
	margin-left: 15px;
	@media screen and (max-width: ${variables.mobileResponsive}) {
        height: 13px;
		width: 13px;
		margin-left: 0px;
		margin-right: 7px;
	}
`
function Rate(props) {

    const nbStars = props.rating

    const stars = [1,2,3,4,5]

    return (
        <RateContainer>
            {stars.map((level) =>
				nbStars >= level ? (
					<StarFull
						key={level.toString()}
						src={starfull}
					/>
				) : ( 
					//affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<StarEmpty
						key={level.toString()}
						src={starempty}
					/>
				)
			)}
        </RateContainer>
    )
}

export default Rate