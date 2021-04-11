// const apiUrl = 'http://localhost:6001/api/'; // FOR TESTING LOCALLY
const apiUrl = 'https://workout-tracker-rest-api.herokuapp.com/api/';

const loginUser = async (email, password) => {
    try {
        const res = await fetch(apiUrl + 'users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (res.status >= 400 && res.status <= 500) {
            throw await res.json();
        }
        const user = await res.json();

        localStorage.setItem('token', user.token);
        let expiresIn = JSON.parse(atob(user.token.split('.')[1])).exp + '000';
        localStorage.setItem('expiresIn', JSON.stringify(expiresIn));
        localStorage.setItem('user', JSON.stringify({
            username: user.username,
            email: user.email
        }));

        return user;
    } catch (error) {
        throw error;
    }
}

const registerUser = async (username, email, password) => {
    try {
        const res = await fetch(apiUrl + 'users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        if (res.status >= 400 && res.status <= 500) {
            throw await res.json();
        }
        const user = await res.json();

        localStorage.setItem('token', user.token);
        let expiresIn = JSON.parse(atob(user.token.split('.')[1])).exp + '000';
        localStorage.setItem('expiresIn', JSON.stringify(expiresIn));
        localStorage.setItem('user', JSON.stringify({
            username: user.username,
            email: user.email
        }));

        return user;
    } catch (error) {
        throw error;
    }
}

const isJWTExpired = () => {
    const expiresIn = JSON.parse(localStorage['expiresIn']);
    const now = Date.now();
    if (now >= expiresIn) {
        return true;
    }
    return false;
}

module.exports = {
    loginUser,
    registerUser,
    isJWTExpired
};