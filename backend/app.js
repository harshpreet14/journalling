const express = require('express');
const app = express();
const entryRouter = require('./routes/entryRoutes');
const userRouter = require('./routes/userRoutes');

app.use(express.json());

app.use('/journal-api/v1/entries/:user_id', entryRouter);

app.use('/journal-api/v1/users', userRouter);


module.exports = app;