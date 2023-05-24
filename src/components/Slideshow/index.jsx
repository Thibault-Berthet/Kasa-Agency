/* ------------ Code REACT pour le composant Slideshow ------------*/

import styled from "styled-components"

const PicturesStyled = styled.img`

`

function Slideshow(props) {
    return (
        <div>
            <PicturesStyled
                src={props.pictures[1]}
            />
        </div>
    )
}

export default Slideshow