import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addOneFileAction } from '../actions/addFileAction'
import DragAndDrop from '../../components/core/atoms/DragAndDrop/DragAndDrop'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addFile: addOneFileAction }, dispatch)
}

const mapStateToProps = (state) => {
    return { files: state.files }
}

export default connect(mapStateToProps, mapDispatchToProps) (DragAndDrop)
