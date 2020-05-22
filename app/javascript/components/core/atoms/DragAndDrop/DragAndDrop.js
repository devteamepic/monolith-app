import React, { useState, useEffect } from 'react'
import DragAndDropStyled from '../../../styled/atoms/dragAndDropStyled'
import { connect } from 'react-redux'
import { fileActions } from '../../../../redux/actions/fileActions'
import Text from '../Text/Text'

const DragAndDrop = ({ files, dispatch, height, ...props }) => {
  const [file, setFiles] = useState(files)
  const [lineHeight] = useState(height)
  const [fileInput] = useState(document.createElement('input'))

  fileInput.setAttribute('type', 'file')

  useEffect(() => {
    setFiles(files)
  }, [files])

  useEffect(() => {
    dispatch(fileActions.addFileAction(file))
  }, [file, dispatch])

  /**
   * When file input is changed (after files are selected via click)
   * calls the function to check its content
   * @param { Object } e Event.
   */
  fileInput.onchange = (e) => {
    e.preventDefault()
    checkAndSetFiles(fileInput.files)
  }

  /**
   * User to catch the Drop
   * @param { Object } e Event.
   */
  const dropHandler = (e) => {
    e.preventDefault()

    if (e.dataTransfer.items) {
      checkAndSetFiles(e.dataTransfer.items)
      return
    }
  }

  /**
   * Just prevents the reload after the drag is over (as far as
   * i remember)
   * @param { Object } e Event.
   */
  const dragOverHandler = (e) => {
    e.preventDefault()
  }

  /**
   * Checks if incoming objects of array are files (drop and onclick
   * return different types)
   * @param { Array } fileArray Array of fresh dragged or selected documents.
   */
  const checkAndSetFiles = (fileArray) => {
    for (var i = 0; i < fileArray.length; i++) {
      if (fileArray[i].kind === 'file') {
        setFiles([...file, fileArray[i].getAsFile()])
      } else {
        setFiles([...file, fileArray[i]])
      }
    }
  }

  return (
    <DragAndDropStyled
      onClick = { () => fileInput.click() }
      onDrop = { dropHandler }
      onDragOver = { dragOverHandler }
      lineHeight = { lineHeight }
    >
      <Text
        size = 'large'
      >
        +
      </Text>
    </DragAndDropStyled>
  )
}

const mapStateToProps = (state) => {
  return { files: state.files }
}

export default connect(mapStateToProps) (DragAndDrop)
