/* ------------ Code REACT pour la page Home ------------*/

import Banner from "../../components/Banner"
import styled from "styled-components"
import CardContainer from "../../components/CardContainer"

// CSS du container
const HomeContainer = styled.div`
	margin: 5%;
`

function Home() {
	return (
		<HomeContainer>
			<Banner />
			<CardContainer />
		</HomeContainer>
	)
}

export default Home