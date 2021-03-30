const apiUrl = 'https://workout-tracker-rest-api.herokuapp.com/api/';
const endpoints = {
    workouts: apiUrl + 'workouts/',
    exercises: apiUrl + 'exercises/',
};
const jwtToken = localStorage['token'] || null;

export function getMostRecentWorkouts(limit) {
    return fetch(endpoints.workouts + (limit ? `?limit=${limit}` : ''), {
        headers: {
            'Authorization': `Bearer ${jwtToken}`
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
    return fetch(endpoints.workouts, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data })
    })
        .then(res => res.json());
}

export function getWorkoutData(id) {
    return fetch(endpoints.workouts + `${id}`, {
        headers: {
            'Authorization': `Bearer ${jwtToken}`
        }
    })
        .then(res => res.json());
}

export function addNewSet(workoutId, exercise, data) {
    console.log(endpoints.workouts + `${workoutId}/exercises/${exercise}/`);
    return fetch(endpoints.workouts + `${workoutId}/exercises/${exercise}/`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${jwtToken}`,
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
            'Authorization': `Bearer ${jwtToken}`
        }
    });
}


