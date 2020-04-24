import React, { useState, useEffect } from 'react'
import DragAndDropStyled from '../../../styled/atoms/dragAndDropStyled'
import { connect } from 'react-redux'
import { addOneFileAction } from '../../../../redux/actions/addFileAction'
import Text from '../Text/Text'

const DragAndDrop = ({ files, dispatch, height, ...props }) => {
    const [file, setFiles] = useState(files)
    const [lineHeight] = useState(height)
    const [fileInput] = useState(document.createElement('input'))

    fileInput.setAttribute('type', 'file')

    useEffect(() => {
        setFiles(files)
    }, [files])

    fileInput.onchange = (e) => {
        e.preventDefault()
        checkAndSetFiles(fileInput.files)
    }

    const checkAndSetFiles = (fileArray) => {
        for (var i = 0; i < fileArray.length; i++) {
            if (fileArray[i].kind === 'file') {
                setFiles([...file, fileArray[i].getAsFile()])
            }
            else {
                setFiles([...file, fileArray[i]])
            }
        }
    }

    const dropHandler = (e) => {
        e.preventDefault()

        if (e.dataTransfer.items) {
            checkAndSetFiles(e.dataTransfer.items)
            return
        }
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        dispatch(addOneFileAction(file))
    }, [file, dispatch])

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
