/* ------------ Code REACT pour le composant Banner ------------*/

import styled from "styled-components"
import banner from '../../assets/banner_img.jpg'
import colors from "../../utils/style/colors"
import variables from "../../utils/variables/variables"

// CSS des différents éléments
const BannerContainer = styled.div`
    height: 14rem;
    margin-bottom: 43px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        height: 7rem;
	}
`
const BannerText = styled.p`
    position: absolute;
    z-index: 1;
    color: ${colors.secondary};
    font-size: 48px;
    font-weight: 500;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    margin-top: 5rem;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 24px;
        margin-left: 3rem;
        text-align: start;
        margin-top: 2rem;
        width : 220px;
	}
`
const BannerImg = styled.img`
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
    filter: brightness(70%);
    @media screen and (max-width: ${variables.mobileResponsive}) {
        border-radius: 10px;
	}
`

function Banner() {
	return (
		<BannerContainer>
			<BannerText>Chez vous, partout et ailleurs</BannerText>
            <BannerImg src={banner} />
		</BannerContainer>
	)
}

export default Banner