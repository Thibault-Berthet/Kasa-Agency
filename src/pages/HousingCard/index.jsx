/* ------------ Code REACT pour la page HousingCard ------------*/

import { useEffect, useState } from "react"
import Slideshow from "../../components/Slideshow"
import { useParams, } from "react-router-dom"
import ErrorPage from "../../components/ErrorPage"
import styled from "styled-components"

const HousingCardContainer = styled.div`
	margin: 5%;
`

function HousingCard() {

	const params = useParams() // Chercher l'id dans l'url avec react router dom

	const [logement, setLogement] = useState(null);

	useEffect(() => {
        async function fetchLogement() {
            try {
                const response = await fetch('http://localhost:3000/logements.json')
                const data = await response.json()
				const res = data.find((element) => element.id === params.id)
				if (!res) {

				}
				setLogement(res)
            } catch(err) {
                console.log('--- error ---', err)
            }
        }
        fetchLogement();
    }, )

	if(!logement) {
		return (
			<ErrorPage />
		)
	}

	return (
		<HousingCardContainer>
			<Slideshow
				pictures={logement.pictures}
			/>
		</HousingCardContainer>
	)
}

export default HousingCard