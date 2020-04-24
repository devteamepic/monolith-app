import styled from 'styled-components'
import colorScheme from '../../../misc/colorScheme'

const ErrorMessageDialogStyled = styled.ul`
position: absolute;
width: 100%;
list-style-type: none;
margin: 0;
padding: 0;
& > li {
background: ${ colorScheme.watermelon };
height: 50px;
border: 1px solid white;
text-align: center;
vertical-align: middle;
line-height: 50px;
color: white;
}
`
export default ErrorMessageDialogStyled
