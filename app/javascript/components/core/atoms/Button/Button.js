import React from 'react'
import ButtonStyled from '../../../styled/atoms/buttonStyled'

const Button = ({ children, callback, ...props }) => {
  return (
    <ButtonStyled
      onClick = { callback }
    >
      { children }
    </ButtonStyled>
  )
}

export default Button
