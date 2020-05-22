import styled from 'styled-components'
import colorScheme from '../../../misc/colorScheme'

const CheckboxMessageStyled = styled.div`
width: fit-content;
display: grid;
grid-template-columns: 30px auto;
color: ${ props => colorScheme[props.color]};
line-height: 25px;
margin: auto;
`

export default CheckboxMessageStyled
