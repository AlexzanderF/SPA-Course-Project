const endpoints = {
    workouts: 'http://localhost:6001/api/workouts/',
    exercises: 'http://localhost:6001/api/exercises/',
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
    console.log(endpoints.workouts + `${id}`);
    return fetch(endpoints.workouts + `${id}`, {
        headers: {
            'Authorization': `Bearer ${jwtToken}`
        }
    })
        .then(res => res.json());
}


