const apiUrl = 'https://workout-tracker-rest-api.herokuapp.com/api/';
const endpoints = {
    workouts: apiUrl + 'workouts/',
    exercises: apiUrl + 'exercises/',
};

function getJWT() {
    return localStorage['token'] || null;
}
function getUserEmail() {
    return JSON.parse(localStorage['user']).email;
}

export function getMostRecentWorkouts(limit, email) {
    return fetch(endpoints.workouts + (limit ? `?limit=${limit}` : '') + (`&user=${email}`), {
        headers: {
            'Authorization': `Bearer ${getJWT()}`
        }
    })
        .then(res => res.json())
        .then(data => {
            const workouts = data.workouts
                .map(({ name, createdAt, _id }) => {
                    return { name, createdAt, _id };
                });

            return workouts;
        })
        .catch(err => console.log(err));
}

export function createNewWorkout(data) {
    const email = getUserEmail();
    return fetch(endpoints.workouts, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getJWT()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data, email })
    })
        .then(res => res.json());
}

export function getWorkoutData(id) {
    return fetch(endpoints.workouts + `${id}`, {
        headers: {
            'Authorization': `Bearer ${getJWT()}`
        }
    })
        .then(res => res.json());
}

export function addNewSet(workoutId, exercise, data) {
    return fetch(endpoints.workouts + `${workoutId}/exercises/${exercise}/`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getJWT()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
}

export function deleteExerciseSet(workoutId, exercise, setId) {
    return fetch(endpoints.workouts + `${workoutId}/exercises/${exercise}/${setId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${getJWT()}`
        }
    });
}

export function deleteExercise(id, exercise) {
    return fetch(endpoints.workouts + `${id}/exercises/${exercise}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${getJWT()}`
        }
    })
        .then(res => res.json());
}
