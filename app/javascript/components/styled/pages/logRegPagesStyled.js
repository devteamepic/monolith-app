import styled from 'styled-components'

const LogRegPagesStyled = styled.div`
height: 100%;
width: 100%;
background-color: ${ props => props.colorScheme.marigold };
display: grid;
grid-template-columns: ${ props => props.isLogin ? '55% auto' : 'auto 65%' };

`

export default LogRegPagesStyled
