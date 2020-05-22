import styled from 'styled-components'

const IconStyled = styled.div`
height: ${ props => props.height };
width: ${ props => props.width};
transform: rotate(${ props => props.rotateDegree }deg);
transition: 0.5s ease all;
${ props => props.styles }
`

export default IconStyled
