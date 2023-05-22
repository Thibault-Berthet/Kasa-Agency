import styled from "styled-components"
import logo from "../../assets/logo_kasa_white.png"
import colors from "../../utils/style/colors"
import variables from "../../utils/variables/variables"

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
			<FooterLogo src={logo}/>
			<FooterStyled>
				© 2020 Kasa. All rights reserved
			</FooterStyled>
		</FooterContainer>
	)
}

export default Footer