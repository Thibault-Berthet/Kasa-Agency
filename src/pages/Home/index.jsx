/* ------------ Code REACT pour la page Home ------------*/

import Banner from "../../components/Banner"
import CardContainer from "../../components/CardContainer"
import styled from "styled-components"

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