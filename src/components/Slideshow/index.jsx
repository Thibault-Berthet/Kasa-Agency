/* ------------ Code REACT pour le composant Slideshow ------------*/

import styled from "styled-components"
import chevronRight from "../../assets/chevron_right.svg"
import chevronLeft from "../../assets/chevron_left.svg"

const SlideContainer = styled.div`

`
const PicturesStyled = styled.img`

`

function Slideshow(props) {
    return (
        <SlideContainer>
            <PicturesStyled
                src={props.pictures[2]}
            />
        </SlideContainer>
    )
}

export default Slideshow