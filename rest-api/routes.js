const passport = require('passport');
const router = require('express').Router();
const workoutsController = require('./controllers/workoutsController');
const exercisesController = require('./controllers/exercisesController');
const authController = require('./controllers/authController');
const errHandler = require('./middlewares/errHandler');

router.use('/workouts', passport.authenticate('jwt', { session: false }), workoutsController);
router.use('/exercises', exercisesController);
router.use('/users', authController);

router.get('*', (req, res) => {
    res.status(404).send('ERROR 404');
});

router.use(errHandler);

module.exports = router;