export function addOneFileAction(file) {
    return {
        type: 'NEW_FILE',
        payload: file
    }
}

export function addFilesAction(fileArray) {
    return {
        type: 'NEW_FILE_ARRAY',
        payload: fileArray
    }
}

export function removeFileAction(file) {
    return {
        type: 'REMOVE_FILE',
        payload: file
    }
}
