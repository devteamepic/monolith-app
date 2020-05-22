import React, { useState } from 'react'
import TipStyled from '../../../styled/organisms/tipStyled'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import Icon from '../../atoms/Icon/Icon'

const Tip = ({ height, width, value, additionalStyles, ...props }) => {
  const [size] = useState({ height, width })
  const [display, setDisplay] = useState('')
  const [text] = useState([
    { component: 'text', size: 'medium', textValue: value },
  ])

  const removeTip = () => {
    setDisplay('none')
  }

  return (
    <TipStyled
      size = { size }
      style = {{ display: display }}
      additionalStyles = { additionalStyles }
    >
      <button
        onClick = { removeTip }
        style = {{
          outline: 'none',
          border: 'none',
          background: 'none',
          padding: '0',
          float: 'right',
          margin: '10px',
        }}
      >
        <Icon
          heightParam = '25px'
          widthParam = '25px'
          icon = 'cross'
        />
      </button>
      <TextViewer
        childrenData = { text }
        additionalStyles = { 'margin-top: 20%;' }
      />
    </TipStyled>
  )
}

export default Tip
