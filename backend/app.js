const express = require('express');
const app = express();
const entryRouter = require('./routes/entryRoutes');
const userRouter = require('./routes/userRoutes');
const cors = require('cors');
const { auth } = require('express-oauth2-jwt-bearer');


const jwtCheck = auth({
    audience: 'http://localhost:3000/journal-api/v1/users/me/entries',
    issuerBaseURL: 'https://dev-fvwp66zogc354jg0.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });


app.use(jwtCheck);

app.use(cors);

app.use(express.json());

app.use('/journal-api/v1/me/entries', entryRouter);

app.use('/journal-api/v1/users', userRouter);


module.exports = app; 