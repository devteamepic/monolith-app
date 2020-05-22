import styled from 'styled-components'
import colorScheme from '../../../misc/colorScheme'

const TipStyled = styled.div`
background-color: ${ colorScheme.steel };
height: ${props => props.size.height };
width: ${props => props.size.width };
overflow: hidden;
margin: auto;
${ props => props.additionalStyles }
`

export default TipStyled
