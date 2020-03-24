const login = (email, password) => {
    console.log('in login service')

    var formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    //axios({
    //    method: 'POST',
    //    url: 'localhost:8080/api/v1/auth/sign_in',
    //    data: formData,
    //})
    //    .then(response => {
    //        console.log('some response')
    //        return response.text().then(text => {
    //            const data = text && JSON.parse(text)
    //            return data
    //        })
    //    })
    //    .catch(error => {
    //        console.log(error)
    //    })
    //
    var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow',
    }
    return fetch('/api/v1/auth/sign_in', requestOptions)
        .then(response => response.text())
}

export default login
