/* ------------ Code REACT pour le composant Footer ------------*/

import styled from "styled-components"
import logo from "../../assets/logo_kasa_white.svg"
import colors from "../../utils/style/colors"
import variables from "../../utils/variables/variables"

// CSS des différents éléments
const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${colors.tertiary};
	padding-top: 66px;
	padding-bottom: 26px;
	@media screen and (max-width: ${variables.mobileResponsive}) {
        padding-bottom: 62px;
	}
`
const FooterStyled = styled.div`
	font-size: 24px;
	font-weight: 500;
	color: ${colors.secondary};
	@media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 12px;
	}
`
const FooterLogo = styled.img`
	height 40px;
	padding-bottom: 30px;
`

function Footer() {
	return (
		<FooterContainer>
			<FooterLogo
				src={logo}
				alt="Image du mot kasa écrit K A S A de couleur blanche sur fond noir avec le premier a en forme de maison"
			/>
			<FooterStyled>
				© 2020 Kasa. All rights reserved
			</FooterStyled>
		</FooterContainer>
	)
}

export default Footer