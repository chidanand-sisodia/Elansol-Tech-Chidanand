const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'], 
  },
  password: {
    type: String,
    required: true,
  },
});

const userManagement = mongoose.model('users', UserSchema);
module.exports =userManagement