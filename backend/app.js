const express = require('express');
const app = express();
const entryRouter = require('./routes/entryRoutes');
const userRouter = require('./routes/userRoutes');
const cors = require('cors');
const axios = require('axios');
const { expressjwt: jwt }= require('express-jwt');
const jwks = require('jwks-rsa');


/*const verifyJwt = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-fvwp66zogc354jg0.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:3000/journal-api/v1/users/me/entries',
    issuer: "https://dev-fvwp66zogc354jg0.us.auth0.com/",
    algorithms: ['RS256']
})*/

app.use(cors());

app.use(express.json());

//app.use(verifyJwt);

app.use('/journal/me/entries', entryRouter);

app.use('/journal/users', userRouter);


module.exports = app; 