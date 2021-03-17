const endpoints = {
    workouts: 'http://localhost:6001/api/workouts/',
    exercises: 'http://localhost:6001/api/exercises/'
};

export function getMostRecentWorkouts(limit) {
    return fetch(endpoints.workouts + (limit ? `?limit=${limit}` : ''))
        .then(res => res.json())
        .then(data => {
            const workouts = data.workouts
                .map(({ name, createdAt, _id }) => {
                    return { name, createdAt, _id }
                });

            return workouts;
        })
        .catch(e => console.log(e));
};