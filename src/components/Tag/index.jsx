/* ------------ Code REACT pour le composant Tag ------------*/

import styled from "styled-components"
import colors from "../../utils/style/colors"
import variables from "../../utils/variables/variables"

const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const TagStyled = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.secondary};
    background: ${colors.primary};
    border-radius: 10px;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 500;
    height: 25px;
    padding-left: 20px;
    padding-right: 20px;
    @media screen and (max-width: ${variables.mobileResponsive}) {
        font-size: 10px;
        height: 18px;
        border-radius: 5px;
        padding-left: 12px;
        padding-right: 12px;
	}
`

function Tag(props) {
    return (
        <TagContainer>
            {props.tags.map((tag) =>
                <TagStyled key={tag}>
                    {tag}
                </TagStyled>
            )}
        </TagContainer>
    )
}

export default Tag