/* ------------ Code REACT pour le composant Collapse ------------*/

import colors from "../../utils/style/colors"
import variables from "../../utils/variables/variables"
import styled from "styled-components"
import { useState } from "react"
import chevronUp from "../../assets/chevron_up.svg"
import chevronDown from "../../assets/chevron_down.svg"

const AboutContainer = styled.div`
    margin-right: 10%;
    margin-left: 10%;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        margin: 0;
	}
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
`
const CategoryText = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 24px;
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
    font-size: 24px;
    font-weight: 400;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 12px;
	}
`

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)

    const isOpenState = () => {
        setIsOpen(!isOpen)
    }

    return (
        <AboutContainer>
            <CategoryContainer onClick={isOpenState}>
                <CategoryText>
                    {props.aboutCategory}
                </CategoryText>
                <CategoryChevron 
                    src={isOpen ? chevronUp : chevronDown}/>
            </CategoryContainer>
            { isOpen ?
            <ExplanationContainer>
                <ExplanationText>
                    {props.aboutExplanation}
                </ExplanationText>
            </ExplanationContainer>
             : null }  
        </AboutContainer>
    )
}

export default Collapse