import styled from 'styled-components'

const ListStyled = styled.ul`
list-style-type: none;
margin: auto;
margin-top: ${ props => props.marginTop || '50px' };
padding: 20px 20px 1px 0;
box-sizing: border-box;
background-color: ${ props => props.backgroundColor };
width: 100%;
height: 700px;
overflow: auto;
scrollbar-width: none;
-ms-overflow-style: none;
&::-webkit-scrollbar {
display:none;
}
`

export default ListStyled
