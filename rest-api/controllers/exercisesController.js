const router = require('express').Router();
const Exercise = require('../models/Exercise');
const checkJWT = require('../middlewares/checkJWT');

router.get('/', async (req, res) => {
    // send info for the form such as all exercises in the database 
    try {
        const allExercises = await Exercise.find({}).lean();
        res.status(200).json({ exercises: allExercises });
    } catch (error) {
        console.error(error);
        res.json({ error: 'Bad request' });
    }
});

module.exports = router;