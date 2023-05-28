/* ------------ Code REACT pour le composant Collapse ------------*/

import { useState } from "react"
import colors from "../../utils/style/colors"
import variables from "../../utils/variables/variables"
import styled from "styled-components"
import chevronUp from "../../assets/chevron_up.svg"
import chevronDown from "../../assets/chevron_down.svg"

// CSS des différents éléments
const AboutContainer = styled.div`
    
`
const CategoryContainer = styled.div`
	color: ${colors.secondary};
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 18px;
    padding-left: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    margin-top: 31px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        margin-top: 20px;
        padding-top: 7px;
        padding-bottom: 7px;
	}
`
const CategoryText = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 500;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 13px;
	}
`
const CategoryChevron = styled.img`
    @media screen and (max-width: ${variables.mobileResponsive}) {
        height: 8px;
        width: 14px;
    }
`
const ExplanationContainer = styled.div`
    padding-right: 27px;
    padding-left: 18px;
    padding-top: 27px;
    padding-bottom: 14px;
    background-color: ${colors.fifth};
    margin-bottom: 33px;
    border-radius: 5px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        padding-bottom: 50px;
        padding-top: 17px;
	}
`
const ExplanationText = styled.p`
    margin: 0;
    padding: 0;
    color: ${colors.primary};
    font-size: 18px;
    font-weight: 400;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 12px;
	}
`

// Reception des informations via les props
function Collapse(props) {

    // Initialisation du collapse à false, le texte est caché
    const [isOpen, setIsOpen] = useState(false)

    // Fonction de changement de l'état de isOpen au moment du click
    const isOpenState = () => {
        setIsOpen(!isOpen)
    }

    // Utilisation des données collapse grace aux props
    return (
        <AboutContainer>
            <CategoryContainer onClick={isOpenState}>
                <CategoryText>
                    {props.Category}
                </CategoryText>
                <CategoryChevron 
                    src={isOpen ? chevronUp : chevronDown}
                    alt="Fleche indiquant le bas quand le texte est caché et indiquant le haut quand le texte est visible"
                />
            </CategoryContainer>
            {isOpen &&
                <ExplanationContainer>
                    <ExplanationText>
                        {props.Explanation}
                    </ExplanationText>
                </ExplanationContainer>
            }
        </AboutContainer>
    )
}

export default Collapse