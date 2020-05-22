const fetchUserData = (token) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: new Headers({
            'Authorization' : 'Bearer ' + token,
        })
    }

    return fetch('https://unifound.me/api/v1/users/me', requestOptions)
        .then(response => response.text())
}

export const userService = {
    fetchUserData
}
