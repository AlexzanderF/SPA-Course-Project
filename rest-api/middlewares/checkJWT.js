const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-rg1k-y55.eu.auth0.com/.well-known/jwks.json`
    }),
    audience: 'http://localhost:6001/api',
    issuer: `https://dev-rg1k-y55.eu.auth0.com/`,
    algorithms: ['RS256']
});

module.exports = checkJwt;