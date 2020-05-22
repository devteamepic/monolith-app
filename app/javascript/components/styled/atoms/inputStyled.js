import styled from 'styled-components'

const InputStyled = styled.input`
outline: none;
border: none;
height: ${ props => props.size.height || '25%' };
width: ${ props => props.size.width || '80%' };
font-size: 25px;
margin-bottom: 8%;
text-align: center;
${ props => props.inputStyles }
`

export default InputStyled
