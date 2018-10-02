const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: String,
  password: { type: String, required: true },
  responses: { type: Object }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
