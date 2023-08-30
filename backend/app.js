const express = require('express');
const cors = require('cors');
const app = express();
const entryRouter = require('./routes/entryRoutes');
const userRouter = require('./routes/userRoutes');
const dotenv = require('dotenv');
const { auth } = require('express-oauth2-jwt-bearer');

dotenv.config({path : './config.env'});

const jwtCheck = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUER,
    tokenSigningAlg: process.env.ALGO
});


app.use(cors());

app.use(express.json());

app.use(jwtCheck);

app.use('/api/journal-ease', entryRouter);

app.use('/api/journal-ease', userRouter);


module.exports = app; 

