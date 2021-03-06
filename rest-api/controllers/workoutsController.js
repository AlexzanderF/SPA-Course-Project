const router = require('express').Router();
const Workout = require('../models/Workout');
const workoutService = require('../services/workoutService');

router.get('/', async (req, res) => {
    const { limit, user, createdAfter } = req.query;
    try {
        let workouts;
        if (limit) {
            workouts = await workoutService.getMostRecent(user, Number(limit), createdAfter);
        } else {
            workouts = await workoutService.getMostRecent(user);
        }
        res.status(200).json({ workouts });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newWorkout = await workoutService.createWorkout(req.body);
        res.status(201).json({ message: 'New workout created successfully', id: newWorkout._id });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    // get data for a certain workout
    const { id } = req.params;
    try {
        const currWorkout = await Workout.findOne({ _id: id }).lean();
        res.status(200).json(currWorkout);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
});

router.post('/:id/exercises', async (req, res) => {
    // handles adding new exercises
    const { id } = req.params;
    const { newExercise } = req.body;
    try {
        await workoutService.addExerciseToWorkout(id, newExercise);
        res.status(201).json({ message: 'New exercise added successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

router.post('/:id/notes', async (req, res) => {
    const { id } = req.params;
    const { notes } = req.body;
    try {
        await workoutService.updateNotes(id, notes);
        res.status(201).json({ message: 'Notes updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id/exercises/:exercise', async (req, res) => {
    const { id, exercise } = req.params;
    try {
        const remainingExercises = await workoutService.deleteExercise(id, exercise);
        res.status(200).json({ message: 'Exercise deleted successfully', remainingExercises });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

router.post('/:id/exercises/:exercise', async (req, res) => {
    // handles adding new sets to an exercise or !!! both new exercise and a new set directly 
    const { id, exercise } = req.params;
    const newSet = req.body;
    try {
        const createdSet = await workoutService.addSetToExercise(id, exercise, newSet);
        res.status(201).json({ message: 'New set added successfully', newSet: createdSet });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:workoutId/exercises/:exercise/:setId', async (req, res) => {
    let { workoutId, exercise, setId } = req.params;
    exercise = exercise.replace(/\%20/g, ' ');
    console.log(exercise);
    try {
        await workoutService.deleteSet(workoutId, exercise, setId);
        res.status(201).json({ message: 'Set deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
})

// router.get('/calendar');

module.exports = router;