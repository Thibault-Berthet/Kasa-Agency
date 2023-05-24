/* ------------ Code REACT pour la page About ------------*/

import BannerAbout from "../../components/BannerAbout"
import Collapse from "../../components/Collapse"
import styled from "styled-components"
import aboutData from "../../utils/datas/aboutData.json"

const AboutContainer = styled.div`
	margin: 5%;
	margin-bottom: 200px;
`

function About() {
	return (
		<AboutContainer>
			<BannerAbout />
			{aboutData.map((data) => (
				<Collapse 
					key={data.id}
					aboutCategory={data.aboutCategory}
					aboutExplanation={data.aboutExplanation}
				/>
			))}
		</AboutContainer>
	)
}

export default About