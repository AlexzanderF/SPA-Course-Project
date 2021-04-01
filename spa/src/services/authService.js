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

        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    loginUser,
    registerUser
};