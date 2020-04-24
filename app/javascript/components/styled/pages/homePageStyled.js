import styled from 'styled-components'

const HomePageStyled = styled.div`
height: 100%;
width: 100%;
background-color: ${ props => props.colorScheme.marigold };
display: grid;
grid-template-columns: 34% 33% 33%;
`

export default HomePageStyled
