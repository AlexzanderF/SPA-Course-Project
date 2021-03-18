const Workout = require('../models/Workout');

module.exports = {
    getMostRecent(count) {
        return Workout.find({}).sort({ 'createdAt': -1 }).limit(count);
    },

    createWorkout(data) {
        console.log(data);
        return new Workout({ ...data }).save();
    },

    async addExerciseToWorkout(id, newExercise) {
        const workout = await Workout.findOne({ _id: id });
        workout.exercises[newExercise] = [];
        workout.markModified(`exercises`);
        return workout.save();
    },

    async addSetToExercise(id, exercise, newSet) {
        const path = `exercises.${exercise}`;
        return Workout.updateOne({ _id: id }, { $push: { [path]: newSet } });
    }
};