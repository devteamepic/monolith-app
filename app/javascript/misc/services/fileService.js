const sendFile = (file, userId, token) => {
  var formData = new FormData()
  formData.append('file', file, file.name)
  formData.append('name', file.name)
  formData.append('size', file.size)

  var requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow',
    headers: new Headers({
      'Authorization' : 'Bearer ' + token,
    })
  }

  return fetch("https://unifound.me/api/v1/users/" + userId + "/documents", requestOptions)
    .then(response => response.text())
}

const sendSubmission = (abstract, idArray, userId, token) => {
  var formData = new FormData()
  formData.append('abstract', abstract)
  for (var i = 0; i < idArray.length; i++) {
    formData.append('document_ids[]', idArray[i]);
  }

  var requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow',
    headers: new Headers({
      'Authorization' : 'Bearer ' + token,
    })
  }

  return fetch("https://unifound.me/api/v1/users/" + userId + "/documents/submissions", requestOptions)
    .then(response => response.text())
}

const getSubmissions = (userId, token) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: new Headers({
      'Authorization' : 'Bearer ' + token,
    })
  }

  return fetch("https://unifound.me/api/v1/users/" + userId + "/documents/submissions", requestOptions)
    .then(response => response.text())
}

const getSubmission = (userId, token, sId) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: new Headers({
      'Authorization' : 'Bearer ' + token,
    })
  }

  return fetch("https://unifound.me/api/v1/users/" + userId + '/documents/submissions/' + sId + '/results', requestOptions)
    .then(response => response.text())
}

const getImage = (url, userId, token) => {
   var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: new Headers({
      'Authorization' : 'Bearer ' + token,
    })
  }

  return fetch("http://134.122.65.136" + url, requestOptions)
    .then(response => response.text())
}

export const fileService = {
  sendFile,
  sendSubmission,
  getSubmissions,
  getSubmission,
  getImage
}
