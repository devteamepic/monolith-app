import styled from 'styled-components'

const InputStyled = styled.input`
outline: none;
border: none;
height: ${ props => props.height || '25%' };
width: 80%;
font-size: 25px;
margin-bottom: 8%;
text-align: center;
${ props => props.inputStyles }
`

export default InputStyled
