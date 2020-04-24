import React, { useState } from 'react'
import Text from '../../atoms/Text/Text'
import { Link } from 'react-router-dom'
import colorScheme from '../../../../misc/colorScheme'
import TextViewerStyled from '../../../styled/molecules/textViewerStyled'

const TextViewer = ({ childrenData, color, ...props }) => {
    const [children] = useState(childrenData)
    return (
      <TextViewerStyled
        style = {{ color: color }}
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
              return (<><br/><br/></>)
          }) }
      </TextViewerStyled>
    )
}

export default TextViewer
