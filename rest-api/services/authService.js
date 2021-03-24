const fs = require('fs');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const privKey = fs.readFileSync('jwtRS256.key', 'utf8');

module.exports = {
    registerNewUser,
    loginUser,
    createJWT
};

async function registerNewUser(password, username, email) {
    try {
        const existing = await User.findOne({ email: email });
        if (existing) {
            throw new Error('Email already in use');
        }

        const salt = crypto.lib.WordArray.random(128 / 8).toString();
        const hash = crypto.PBKDF2(password, salt, {
            keySize: 256 / 32
        }).toString();

        const newUser = new User({
            username,
            email,
            password: hash,
            salt: salt
        });

        return newUser.save();
    } catch (error) {
        throw error;
    }
}

async function loginUser(password, email) {
    try {
        const user = await User.findOne({ email: email });
        if (!user) throw new Error('Invalid email');

        if (!validatePassword(password, user.password, user.salt)) throw new Error('Invalid password');

        return { ...createJWT(user), username: user.username, email: user.email };
    } catch (error) {
        throw error;
    }
}

function createJWT(user) {
    try {
        const { _id } = user;
        const expiresIn = '1w';

        const signedToken = jwt.sign({ id: _id }, privKey, { expiresIn: expiresIn, algorithm: 'RS256' });

        return {
            token: signedToken,
            expires: expiresIn
        };
    } catch (error) {
        console.log(error);
    }
}

function validatePassword(currPassword, hashedPassword, salt) {
    const verifyHash = crypto.PBKDF2(currPassword, salt, {
        keySize: 256 / 32
    }).toString();

    return verifyHash === hashedPassword;
}