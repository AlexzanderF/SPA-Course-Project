const loginUser = (username, password) => {
    return fetch('http://localhost:6001/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        })
        .catch(err => console.log(err));
}

module.exports = {
    loginUser
};