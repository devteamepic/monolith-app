import styled from 'styled-components'

const DragAndDropStyled = styled.div`
width: 100%;
height: 100%;
border: 5px dotted black;
border-radius: 20px;
text-align: center;
line-height: ${ props => props.lineHeight };
`

export default DragAndDropStyled
