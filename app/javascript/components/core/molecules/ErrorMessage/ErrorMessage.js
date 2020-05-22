import React, { useState, useEffect } from 'react'
import Text from '../../atoms/Text/Text'

const ErrorMessage = ({ error, ...props }) => {
  const [messageToDisplay, setMessageToDisplay] = useState(error)

  useEffect(() => {
    setMessageToDisplay(error)
  }, [error])

  return(
    <li>
      <Text
        size = 'medium'
      >
        { messageToDisplay }
      </Text>
    </li>
  )
}

export default ErrorMessage
