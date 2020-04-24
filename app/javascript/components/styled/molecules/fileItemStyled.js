import styled from 'styled-components'

const FileItemStyled = styled.li`
height: 150px;
min-width: fit-content;
background-color: ${ props => props.colorScheme.denim };
color: white;
margin: 0 20px 20px 20px;
padding: 20px 20px 0 20px;
box-sizing: border-box;
display: grid;
grid-template-columns: 110px 250px 50px;
`

export default FileItemStyled
