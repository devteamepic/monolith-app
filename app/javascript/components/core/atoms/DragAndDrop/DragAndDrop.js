import React, { useState, useEffect } from 'react'
import DragAndDropStyled from '../../../styled/atoms/dragAndDropStyled'
import { connect } from 'react-redux'
import { addOneFileAction } from '../../../../redux/actions/addFileAction'

const DragAndDrop = ({ dispatch, ...props }) => {
    const [files, setFiles] = useState([])

    const checkAndSetFiles = (e) => {
        for (var i = 0; i < e.dataTransfer.items.length; i++) {
            if (e.dataTransfer.items[i].kind === 'file') {
                setFiles([...files, e.dataTransfer.items[i].getAsFile()])
            }
        }
    }

    const dropHandler = (e) => {
        e.preventDefault()

        if (e.dataTransfer.items) {
            checkAndSetFiles(e)
            return
        }

    }

    const dragOverHandler = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        dispatch(addOneFileAction(files))
    }, [files, dispatch])

    return (
        <DragAndDropStyled
          onDrop = { dropHandler }
          onDragOver = { dragOverHandler }
        >
          +
        </DragAndDropStyled>
    )
}

export default connect() (DragAndDrop)
