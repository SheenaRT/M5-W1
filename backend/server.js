const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./mongo')();

const messageRoute = require('./Routes/messageRoute');
app.use('/message', messageRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
