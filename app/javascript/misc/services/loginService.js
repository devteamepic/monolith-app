const login = (email, password) => {
    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    return fetch("http://134.122.65.136/api/v1/auth/sign_in", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.text()
            }
            return new Error(response.status)
        })
}

export default login
