import React, { useState } from 'react'
import ProfItemStyled from '../../../styled/organisms/profItemStyled'
import Icon from '../../atoms/Icon/Icon'
import Text from '../../atoms/Text/Text'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import colorScheme from '../../../../misc/colorScheme'
import { profItemPreviewTextGenerator, profItemFullTextGenerator } from '../../../../misc/texts/profItemText'

const ProfItem = ({ ...props }) => {
  const [isUpsideDown, setIsUpsideDown] = useState(false)
  const [previewStyles] = useState(`
    color: ${ colorScheme.marigold };
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    width: 175px;
    height: 100%;
  `)
  const [expandedTextStyles] = useState(`
    color: ${ colorScheme.marigold };
    grid-column: 1/5;
    padding: 10px 10px 10px 0;
    width: 100%;
    text-align: left;
  `)
  const [preview] = useState(profItemPreviewTextGenerator('D. Markitanov', 'KBTU', 'MCS'))
  const [fullText] = useState(profItemFullTextGenerator('Denis Markitanov', 'dmarkitanov@gmail.com', 'Archlinux based OS with custom kernel', 'Master of Computer Science'))

  /**
   * Handles the onclick that extenst the element
   */
  const handleClick = () => {
    setIsUpsideDown(!isUpsideDown)
  }

  return (
    <ProfItemStyled
      shouldExpand = { isUpsideDown }
    >
      <Icon
        heightParam = '110px'
        widthParam = '80px'
        icon = 'person'
      />
      <TextViewer
        childrenData={ preview }
        color = { colorScheme.marigold }
        notDescription = { true }
        additionalStyles = { previewStyles }
      />
      <div
        style = {{ paddingTop: '35%' }}
      >
        <Text
          size = 'large'
        >
          100%
        </Text>
      </div>
      <button
        onClick = { handleClick }
        style = {{
          outline: 'none',
          border: 'none',
          background: 'none',
          width: '50px',
          height: '50px',
          margin: isUpsideDown ? '0 0 0 25px' : '25px  0 0 25px',
          padding: '0',
          transform: 'translateY(25%) translateX(-25%)',
          transition: '0.5s ease all'
        }}
      >
        <Icon
          degree = { isUpsideDown ? '180' : '0' }
          heightParam = '50px'
          widthParam = '50px'
          icon = 'v'
        />
      </button>
      { isUpsideDown &&
        <TextViewer
          childrenData = { fullText }
          notDescription = { true }
          additionalStyles = { expandedTextStyles }
        />
      }
    </ProfItemStyled>
  )
}

export default ProfItem
