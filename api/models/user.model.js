const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EMAIL_PATTERN = /\S+@\S+\.\S+/;
const PASSWORD_PATTERN = /^.{8,}$/;
