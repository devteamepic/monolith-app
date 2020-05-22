import React, { useState, useEffect } from 'react'
import Text from '../../atoms/Text/Text'
import { Link } from 'react-router-dom'
import colorScheme from '../../../../misc/colorScheme'
import TextViewerStyled from '../../../styled/molecules/textViewerStyled'

const TextViewer = ({ childrenData, color, notDescription, additionalStyles, ...props }) => {
  const [shouldChange] = useState(notDescription)
  const [children, setChildren] = useState(childrenData)

  useEffect(() => {
    setChildren(childrenData)
  }, [childrenData])

  return (
    <TextViewerStyled
      shouldChange = { shouldChange }
      additionalStyles = { additionalStyles }
    >
      { children.map(child => {
        if (child.component === 'text') {
          return (
            <Text
              key = { child.textValue }
              isHeader = { child.isHeader }
              size = { child.size }
            >
              { child.textValue }
            </Text>
          )
        } else if (child.component === 'link')  {
          return (
            <Link
              key = { child.link }
              to = { child.link }
              style={{ color: colorScheme.blue, fontFamily: 'Roboto' }}
            >
              <Text
                size = { 'medium' }
              >
                { child.textValue }
              </Text>
            </Link>
          )
        }
        return (<><br/></>)
      }) }
    </TextViewerStyled>
  )
}

export default TextViewer
