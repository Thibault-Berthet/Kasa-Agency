/* ------------ Code REACT pour la page About ------------*/

import BannerAbout from "../../components/BannerAbout"
import Collapse from "../../components/Collapse"
import styled from "styled-components"
import aboutData from "../../utils/datas/aboutData.json"
import variables from "../../utils/variables/variables"

const AboutContainer = styled.div`
	margin: 5%;
	margin-bottom: 200px;
`
const CollapseContainer = styled.div`
	margin-right: 10%;
	margin-left: 10%;
	@media screen and (max-width: ${variables.mobileResponsive}) {
		margin: 0;
	}
`
function About() {
	return (
		<AboutContainer>
			<BannerAbout />
			{aboutData.map((data) => (
				<CollapseContainer key={data.id}>
				<Collapse 
					Category={data.aboutCategory}
					Explanation={data.aboutExplanation}
				/>
				</CollapseContainer>
			))}
		</AboutContainer>
	)
}

export default About