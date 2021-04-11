import axios from 'axios';

const apiUrl = 'https://workout-tracker-rest-api.herokuapp.com/api/';
const endpoints = {
    workouts: apiUrl + 'workouts/',
    exercises: apiUrl + 'exercises/',
};

function getUserEmail() {
    return JSON.parse(localStorage['user']).email || null;
}

export function getMostRecentWorkouts(limit) {
    return axios.get(endpoints.workouts + (limit ? `?limit=${limit}` : '') + (`&user=${getUserEmail()}`))
        .then(({ data }) => {
            const workouts = data.workouts
                .map(({ name, createdAt, _id, exercises, type }) => {
                    return {
                        name, createdAt, _id, type,
                        exerciseCount: exercises ? Object.keys(exercises).length : 0
                    };
                });

            return workouts;
        })
        .catch(err => console.log(err));
}

export function getWorkoutsAfterDate(limit, date) {
    return axios.get(endpoints.workouts + `?limit=${limit}&createdAfter=${date}&user=${getUserEmail()}`)
        .then(({ data }) => data);
}

export function createNewWorkout({ workoutName: name, type }) {
    const createdBy = getUserEmail();
    return axios.post(endpoints.workouts, {
        name,
        type,
        createdBy
    })
        .then(({ data }) => data);
}

export function getWorkoutData(id) {
    return axios.get(endpoints.workouts + `${id}`)
        .then(({ data }) => data);
}

export function addWorkoutNotes(id, notes) {
    return axios.post(endpoints.workouts + `${id}/notes`,
        {
            notes
        })
        .then(({ data }) => data);
}

export function addNewSet(workoutId, exercise, data) {
    return axios.post(endpoints.workouts + `${workoutId}/exercises/${exercise}/`, {
        ...data
    })
        .then(({ data }) => data);
}

export function deleteExerciseSet(workoutId, exercise, setId) {
    return axios.delete(endpoints.workouts + `${workoutId}/exercises/${exercise}/${setId}`);
}

export function deleteExercise(id, exercise) {
    return axios.delete(endpoints.workouts + `${id}/exercises/${exercise}`)
        .then(({ data }) => data);
}

export function addExercise(id, newExercise) {
    return axios.post(endpoints.workouts + `${id}/exercises/`, {
        newExercise
    });
}
