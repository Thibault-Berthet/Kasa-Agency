import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import variables from "../../utils/variables/variables"

const CardStyled = styled.article`
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
`
const CardCover = styled.img`
    position: realtive;
    height: 340px;
    width: 340px;
    margin-bottom: 50px;
    object-fit: cover;
    border-radius: 10px;
    background: linear-gradient(180deg, rgb(235, 99, 99) 0%, rgba(54, 26, 26, 0.667) 100% );
    @media screen and (max-width: ${variables.mobileResponsive}) {
        width: 100%;
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

function Card({cover, title, id}) {

    const [logement, setLogement] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/logements.json')

            .then((response) => response.json())

            .then(data => {
                setLogement(data)
            })
    }, [])

    return (
        <CardStyled>
            {logement.map((data) => (
                <Link to={`/logements/:${data.id}`}>
                    <CardTitle>{data.title}</CardTitle>
                    <CardCover src={data.cover} />
                </Link>
            ))}
        </CardStyled>
    )
}

export default Card