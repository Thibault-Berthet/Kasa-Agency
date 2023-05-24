/* ------------ Code REACT pour la page HousingCard ------------*/

import { useEffect, useState } from "react"
import Slideshow from "../../components/Slideshow";

function HousingCard() {

	const [logementData, setLogement] = useState([]);

	useEffect(() => {
        fetch('http://localhost:3000/logements.json')

            .then((response) => response.json())

            .then(data => {
                setLogement(data)
            })
    }, [])

	return (
		<div>
			<Slideshow />
		</div>
	)
}

export default HousingCard