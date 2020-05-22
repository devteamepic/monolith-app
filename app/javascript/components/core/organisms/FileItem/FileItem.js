import React, { useState } from 'react'
import FileItemStyled from '../../../styled/organisms/fileItemStyled'
import colorScheme from '../../../../misc/colorScheme'
import Icon from '../../atoms/Icon/Icon'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import { fileActions } from '../../../../redux/actions/fileActions'
import { connect } from 'react-redux'
import { fileItemTextGenerator } from '../../../../misc/texts/fileItemText'

const FileItem = ({ fileObject, dispatch, ...props }) => {
  const [additionalStyles] = useState(`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
    width: 100%;
    text-align: left;
  `)
  const [fileText] = useState(fileItemTextGenerator(fileObject.name, fileObject.size))

  const handleClick = () => {
    dispatch(fileActions.removeFileAction(fileObject))
  }

  return (
    <FileItemStyled
      colorScheme = { colorScheme }
    >
      <Icon
        heightParam = '110px'
        widthParam = '110px'
        icon = 'file'
      />
      <TextViewer
        childrenData = { fileText }
        notDescription = { true }
        additionalStyles = { additionalStyles }
      />
      <button
        onClick = { handleClick }
        style = {{
          outline: 'none',
          border: 'none',
          background: 'none',
          width: '50px',
          height: '50px',
          margin: '25px 0 0 25px',
          padding: '0',
          transform: 'translateY(25%) translateX(-25%)'
        }}
      >
        <Icon
          heightParam = '50px'
          widthParam = '50px'
          icon = 'cross'
        />
      </button>
    </FileItemStyled>
  )
}

export default connect() (FileItem)
