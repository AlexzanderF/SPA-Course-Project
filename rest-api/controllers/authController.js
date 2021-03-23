const router = require('express').Router();
const { json } = require('express');
const authService = require('../services/authService');

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    authService.loginUser(password, email)
        .then((jwt) => {
            res.status(200).json({ ...jwt });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ msg: err.message });
        })
});

router.post('/register', (req, res) => {
    const { password, username, email } = req.body;

    authService.registerNewUser(password, username, email)
        .then((user) => {
            res.status(201).json({ ...authService.createJWT(user) });
        })
        .catch(err => res.status(400).json({ msg: err.message }));
});

module.exports = router;