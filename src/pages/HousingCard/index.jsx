/* ------------ Code REACT pour la page HousingCard ------------*/

import { useEffect, useState } from "react"
import Slideshow from "../../components/Slideshow"
import TitleLocation from "../../components/TitleLocation"
import Tag from "../../components/Tag"
import Host from "../../components/Host"
import Rate from "../../components/Rate"
import Collapse from "../../components/Collapse"
import { useParams, } from "react-router-dom"
import ErrorPage from "../../components/ErrorPage"
import styled from "styled-components"
import variables from "../../utils/variables/variables"

const HousingCardContainer = styled.div`
	margin: 5%;
	display: flex;
	justify-content: center;
    align-items: center;
	flex-direction: column;
`
const TitleTagHostRateContainer = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	width: 100%;
	@media screen and (max-width: ${variables.mobileResponsive}) {
        flex-flow: column;
	}
`
const NameTagContainer = styled.div`
	display: flex;
	flex-direction: column;
`
const HostRateContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: ${variables.mobileResponsive}) {
        flex-direction: row-reverse;
		justify-content: space-between;
		margin-top: 17px;
	}
`
const InfosContainer = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	width: 100%;
	@media screen and (max-width: ${variables.mobileResponsive}) {
        flex-flow: column;
		justify-content: flex-start;
	}
`
const CollapseContainer = styled.div`
	width: 45%;
	max-width: 582px;
	@media screen and (max-width: ${variables.mobileResponsive}) {
        width: 100%;
	}
`
const EquipStyled = styled.li`
	list-style-type: none;
`

function HousingCard() {

	const params = useParams() // Chercher l'id dans l'url avec react router dom

	const [logement, setLogement] = useState(null)

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

	const equip = logement.equipments.map((item, index) => (
		<EquipStyled key={index}>
			{item}
		</EquipStyled>
	))

	return (
		<HousingCardContainer>

			<Slideshow
				pictures={logement.pictures}
			/>

			<TitleTagHostRateContainer>
				<NameTagContainer>
					<TitleLocation
						title={logement.title}
						location={logement.location}
					/>
					<Tag
						tags={logement.tags}
					/>
				</NameTagContainer>

				<HostRateContainer>
					<Host
						host={logement.host}
					/>
					<Rate
						rating={logement.rating}
					/>
				</HostRateContainer>
			</TitleTagHostRateContainer>

			<InfosContainer>
				<CollapseContainer>
					<Collapse
						Category="Description"
						Explanation={logement.description}
					/>
				</CollapseContainer>
				<CollapseContainer>
					<Collapse
						Category="Équipements"
						Explanation={equip}
					/>
				</CollapseContainer>
			</InfosContainer>
		</HousingCardContainer>
	)
}

export default HousingCard