const router = require('express').Router();

router.get('/:id', (req, res) => {
    // send user info and user's workouts(PRs, weight, most recent workout, ...)
});

router.get('/:id/progress', (req, res) => {
    // send detailed info about user's progress and workouts
});

module.exports = router;