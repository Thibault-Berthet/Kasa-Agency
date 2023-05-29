/* ------------ Code REACT pour le composant Slideshow ------------*/

import styled from "styled-components"
import { useState } from "react"
import chevronRight from "../../assets/chevron_right.svg"
import chevronLeft from "../../assets/chevron_left.svg"
import variables from "../../utils/variables/variables"

// CSS des différents éléments
const SlideContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        margin-left: 3%;
        margin-right: 3%;
        margin-bottom: 15px;
	}
`
const ContainerImageIndex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
const ContainerPicture = styled.div`
    height: 415px;
    width: 100%;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        height: 255px;
	}
`
const PicturesStyled = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
`
const ChevronLeftStyled =styled.img`
    z-index: 1;
    margin-right: -70px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        width: 12px;
        height: 20px;
        margin-right: -20px;
	}
`
const IndexStyled = styled.span`
    z-index: 1;
    margin-top: -40px;
    color: white;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        display: none;
	}
`
const ChevronRightStyled =styled.img`
    z-index: 1;
    margin-left: -70px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        width: 12px;
        height: 20px;
        margin-left: -20px;
	}
`
// Récupération des informations via les props
function Slideshow(props) {
    
    // Création du tableau de pictures
    const slideShow = props.pictures

    // Longueur du tableau des slides
    const lengthSlides = slideShow.length

    // Index du premier slide défini à 0
    const [slideIndex, setSlideIndex] = useState(0)

    // Fonction qui va au slide suivant et qui reviens au premier slide quand on fait suivant au dernier
    const nextSlide = () => {
        setSlideIndex(slideIndex === lengthSlides - 1 ? 0 : slideIndex + 1)
    }

    // Fonction qui va au slide précédent et qui va au dernier slide quand on fait précédent au premier
    const prevSlide = () => {
		setSlideIndex(slideIndex === 0 ? lengthSlides - 1 : slideIndex - 1)
	}

    // Selection de l'image à afficher
    const selectPicture = slideShow.slice(slideIndex,slideIndex + 1)

    return (
        <SlideContainer>
            {lengthSlides > 1 && (
				<ChevronLeftStyled
					src={chevronLeft}
					onClick={prevSlide}
                    alt="Flèche vers la gauche qui permet de changer l'image afficher"
				/>
			)}

            {selectPicture.map((slides, index) => (
				<ContainerImageIndex key={index}>
                    <ContainerPicture>
                        <PicturesStyled
                            src={slides}
                            alt="Photo du logement"
                        />
                    </ContainerPicture>
                    <IndexStyled>
                        {slideIndex + 1}/{lengthSlides}
                    </IndexStyled>
				</ContainerImageIndex>
			))}

            {lengthSlides > 1 && (
				<ChevronRightStyled
					src={chevronRight}
					onClick={nextSlide}
                    alt="Flèche vers la droite qui permet de changer l'image afficher"
				/>
			)}
        </SlideContainer>
    )
}

export default Slideshow