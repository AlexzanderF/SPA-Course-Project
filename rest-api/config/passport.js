const fs = require('fs');
const User = require('../models/User');
const { Strategy: JwtStrategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');

const pubKey = fs.readFileSync('jwtRS256.key.pub', 'utf8');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: pubKey,
    algorithms: ['RS256']
};

const strategy = new JwtStrategy(options, (payload, done) => {
    // checks if we have the user in the database
    User.findOne({ _id: payload.id })
        .then((user) => {
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        })
        .catch(err => done(err, false));
});

module.exports = (passport) => {
    passport.use(strategy);
};