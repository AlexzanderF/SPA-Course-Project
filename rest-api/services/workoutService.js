const Workout = require('../models/Workout');

module.exports = {
    getMostRecent(email, count, date) {
        if (date) {
            return Workout.find({ 'createdBy': email })
                .where({ 'createdAt': { $lt: new Date(date) } })
                .sort({ 'createdAt': -1 })
                .limit(count);
        }
        return Workout.find({ createdBy: email })
            .sort({ 'createdAt': -1 })
            .limit(count);
    },

    createWorkout(data) {
        return new Workout({ ...data }).save();
    },

    async addExerciseToWorkout(id, newExercise) {
        const workout = await Workout.findOne({ _id: id });
        workout.exercises[newExercise] = [];
        workout.markModified(`exercises`);
        return workout.save();
    },


    async deleteExercise(id, exercise) {
        const path = `exercises.${exercise}`;
        console.log(exercise);
        await Workout.updateOne(
            { _id: id },
            { $unset: { [path]: undefined } });
        return (await Workout.findOne({ _id: id })).exercises;
    },

    async addSetToExercise(id, exercise, newSet) {
        newSet.id = new Date().valueOf().toString();
        const path = `exercises.${exercise}`;
        await Workout.updateOne({ _id: id }, { $push: { [path]: newSet } });
        return newSet;
    },

    async deleteSet(workoutId, exercise, setId) {
        const path = `exercises.${exercise}`;
        return Workout.updateOne({ _id: workoutId }, { $pull: { [path]: { id: setId } } });
    },

    async updateNotes(id, notes) {
        return Workout.updateOne({ _id: id }, { $set: { notes: notes } });
    }
};