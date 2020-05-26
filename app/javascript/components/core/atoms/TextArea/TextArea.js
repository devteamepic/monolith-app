import React, { useState } from 'react'
import TextAreaStyled from '../../../styled/atoms/textAreaStyled'
import colorScheme from '../../../../misc/colorScheme'

const TextArea = ({ height, width, shouldDisable, value, callback, ...props }) => {
  const [size] = useState({ height, width })
  const [disable] = useState(shouldDisable)
    const [numOfChars, setNumOfChars] = useState(5000)

    const handleKeyPress = (e) => {
      e.preventDefault()

      callback(e.target.value)

      setNumOfChars(5000 - e.target.value.length)
    }

  return (
    <div
      style = {{ height: size.height, width: size.width }}
    >
      <TextAreaStyled
        size = { size }
        maxLength = { 5000 }
        onChange = { handleKeyPress }
        disabled = { disable }
      >
        { value }
      </TextAreaStyled>
      { !disable &&
        <input
          style = {{
            width: size.width,
            textAlign: 'right',
            border: '0',
            backgroundColor: colorScheme.marigold,
            color: 'black',
            padding: '0'
          }}
          disabled
          value={ numOfChars }
        />
      }

    </div>
  )
}

export default TextArea
