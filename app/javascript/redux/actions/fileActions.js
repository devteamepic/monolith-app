const addFileAction = (file) => {
  return {
    type: 'NEW_FILE',
    payload: file
  }
}

const removeFileAction = (file) => {
  return {
    type: 'REMOVE_FILE',
    payload: file
  }
}

export const fileActions = {
  addFileAction,
  removeFileAction
}
