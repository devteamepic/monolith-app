import React, { useState } from 'react'
import Text from '../../atoms/Text/Text'
import Input from '../../atoms/Input/Input'
import CheckboxMessageStyled from '../../../styled/molecules/checkboxMessage'

const CheckboxMessage = ({ textColor, children, callback, ...props }) => {
  const [text] = useState(children)
  const [color] = useState(textColor)

  return (
    <CheckboxMessageStyled
      color = { color }
    >
      <Input
        type = 'checkbox'
        callback = { callback }
      />
      <Text
        size = 'small'
      >
        { text }
      </Text>
    </CheckboxMessageStyled>
  )
}

export default CheckboxMessage
