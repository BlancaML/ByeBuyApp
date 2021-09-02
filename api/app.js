const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application running at port ${port}`));