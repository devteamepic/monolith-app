import React, { useState } from 'react'
import styled from 'styled-components'
import colorScheme from '../../../misc/colorScheme'
import '../../../../assets/stylesheets/application.css'

const FormStyled = styled.div`
width: ${ props => props.type === 'login' ? '500px' : '900px' };
height: 80%;
background-color: ${ colorScheme.steel };
text-align: center;
margin: auto;
${ props => props.type === 'register' && 'margin-top: 5%;' }
`

const FormStyledWrapper = ({ children, callback, ...props }) => {
  const [incomingType] = useState(props.type)

  return (
    <FormStyled
      type = { incomingType }
    >
      <form
        id = { incomingType }
        onSubmit = { (e) => callback(e) }
      >
        { children }
      </form>
    </FormStyled>
  )
}

export default FormStyledWrapper
