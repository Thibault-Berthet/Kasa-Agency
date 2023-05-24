/* ------------ Code REACT pour le composant BannerAbout ------------*/

import styled from "styled-components"
import bannerAbout from "../../assets/banner_about_img.jpg"
import variables from "../../utils/variables/variables"

const BannerAboutContainer = styled.div`
    height: 14rem;
    margin-bottom: 43px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        height: 223px;
	}
`

const BannerAboutImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
    filter: brightness(70%);
    @media screen and (max-width: ${variables.mobileResponsive}) {
        border-radius: 10px;
	}
`

function BannerAbout() {
	return (
		<BannerAboutContainer>
            <BannerAboutImg src={bannerAbout} />
		</BannerAboutContainer>
	)
}

export default BannerAbout