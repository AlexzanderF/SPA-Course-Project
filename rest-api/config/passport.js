const User = require('../models/User');
const { Strategy: JwtStrategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');
const { SECRET } = require('./config');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET,
    algorithms: ['RS256']
};

const strategy = new JwtStrategy(options, (payload, done) => {
    // checks if we have the user in the database
    User.findOne({ _id: payload.sub })
        .then((user) => {
            if (user) {
                return (null, user);
            } else {
                done(null, false);
            }
        })
        .catch(err => done(err, false));
});

module.exports = (passport) => {
    passport.use(strategy);
};