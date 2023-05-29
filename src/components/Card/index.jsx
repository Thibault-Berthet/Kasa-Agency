/* ------------ Code REACT pour le composant Card ------------*/

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import variables from "../../utils/variables/variables"

// CSS des différents éléments
const CardStyled = styled.article`
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        justify-content: center;
        align-content: center;
	}
`
const CardGradient = styled.div`
    position: absolute;
    z-index: 1;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    width: 340px;
    height: 340px;
    border-radius: 10px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        width: 90%;
        max-width: 340px;
        height: 255px;
	}
`
const CardTitle = styled.h2`
    position: absolute;
    z-index: 1;
    color: ${colors.secondary};
    font-size: 18px;
    font-weight: 500;
    margin-top: 280px;
    margin-left: 20px;
    max-width: 250px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        margin-top: 195px;
        max-width: 250px;
	}
`
const CardCover = styled.img`
    position: relative;
    height: 340px;
    width: 340px;
    margin-bottom: 50px;
    object-fit: cover;
    border-radius: 10px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        width: 100%;
        max-width: 340px;
        height: 255px;
	}
`

function Card() {

    // Initialisation des logements avec un tableau vide
    const [logements, setLogements] = useState([]);

    // Utilisation de fetch en asynchrone pour aller chercher les informations à propos des logements
    useEffect(() => {
        async function fetchLogement() {
            try {
                const response = await fetch('http://localhost:3000/logements.json')
                const data = await response.json()
                setLogements(data)
            } catch(err) {
                console.log('--- error ---', err)
            }
        }
        fetchLogement()
    }, [])

    // Création de la liste des logements avec map
    // Passage des données logements dans les composants avec les props
    return (
        <CardStyled>
            {logements.map((data, index) => (
                <Link to={`/logements/${data.id}`} key={`${data.id}-${index}`}>
                    <CardGradient>
                        <CardTitle>{data.title}</CardTitle>
                    </CardGradient>
                    <CardCover
                        src={data.cover}
                        alt="Photo du logement"
                    />
                </Link>
            ))}
        </CardStyled>
    )
}

export default Card

// Utilisation de fetch avec les .then pour récupérer les données
// useEffect(() => {
//     fetch('http://localhost:3000/logements.json')

//         .then((response) => response.json())

//         .then(data => {
//             setLogements(data)
//         })
// }, [])