import styled from 'styled-components'
import colorScheme from '../../../misc/colorScheme'

const TextAreaStyled = styled.textarea`
resize: none;
height: ${ props => props.size.height };
width: ${ props => props.size.width };
background-color: ${ colorScheme.denim };
color: white;
text-align: left;
font-family: Roboto;
font-size: 16px;
padding: 15px;
box-sizing: border-box;
border: none;
outline: none;
`

export default TextAreaStyled
