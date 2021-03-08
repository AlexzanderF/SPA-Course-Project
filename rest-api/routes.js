const router = require('express').Router();
const workoutsController = require('./controllers/workoutsController');
const exercisesController = require('./controllers/exercisesController');
const userController = require('./controllers/userController');
const errHandler = require('./middlewares/errHandler');

router.use('/workouts', workoutsController);
router.use('/exercises', exercisesController);
router.use('/users', userController);

router.get('*', (req, res) => {
    res.status(404).send('ERROR 404');
});

router.use(errHandler);

module.exports = router;