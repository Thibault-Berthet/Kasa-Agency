/* ------------ Code REACT pour le composant Rate ------------*/

import styled from "styled-components"
import colors from "../../utils/style/colors"
import starfull from "../../assets/star_full.svg"
import starempty from "../../assets/star_empty.svg"
import variables from "../../utils/variables/variables"

// CSS des différents éléments
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

	// Création de la constante qui va contenir le nombre d'étoile rempli
    const nbStars = props.rating

	// Création du tableau de nombre d'étoiles total
    const stars = [1,2,3,4,5]

    return (
        <RateContainer>
            {stars.map((level) =>
				nbStars >= level ? (
					// Affichage des étoiles pleine temps que le nombre d'étoile rempli est supérieur ou égal à la valeur dans le tableau du nombre d'étoiles total
					<StarFull
						key={level.toString()}
						src={starfull}
						alt="Étoile à 5 branches rempli de la couleur rouge-rose"
					/>
				) : ( 
					// Affichage des étoiles vide quand la valeur du tableau est supérieur au nombre d'étoile rempli
					<StarEmpty
						key={level.toString()}
						src={starempty}
						alt="Étoile à 5 branches rempli de la couleur grise"
					/>
				)
			)}
        </RateContainer>
    )
}

export default Rate