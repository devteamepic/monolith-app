import styled from 'styled-components'

const TextViewerStyled = styled.div`
height: 40%;
color: white;
width: 60%;
text-align: center;
margin-left: ${ props => !props.shouldChange && '20%' };
margin-top: ${ props => !props.shouldChange && '30%' };
${ props => props.additionalStyles }
`

export default TextViewerStyled
