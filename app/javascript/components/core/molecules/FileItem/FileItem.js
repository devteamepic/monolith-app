import React, { useState } from 'react'
import FileItemStyled from '../../../styled/molecules/fileItemStyled'
import colorScheme from '../../../../misc/colorScheme'
import Icon from '../../atoms/Icon/Icon'
import Text from '../../atoms/Text/Text'
import { removeFileAction } from '../../../../redux/actions/addFileAction'
import { connect } from 'react-redux'

const FileItem = ({ fileObject, dispatch, ...props }) => {
  const [file] = useState(fileObject)

  const handleClick = () => {
    dispatch(removeFileAction(file))
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
          <div style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Text
              size = 'medium'
              isHeader = { true }
            >
              { file.name }
            </Text>
            <><br/><br/></>
            <Text
              size = 'medium'
              isHeader = { true }
            >
              File size: { file.size }
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
