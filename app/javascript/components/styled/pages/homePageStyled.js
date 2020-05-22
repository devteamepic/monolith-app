import styled from 'styled-components'
import colorScheme from '../../../misc/colorScheme'

const HomePageStyled = styled.div`
width: 100%;
height: 100%;
background-color: ${ colorScheme.marigold };
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 50% 50%;
grid-auto-flow: column;
`

export default HomePageStyled
