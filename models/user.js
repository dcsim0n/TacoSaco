/**
|--------------------------------------------------
| user model
|--------------------------------------------------
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true, match: /^[a-z]+$/ },
  password: { type: String, required: true, minlength: 3 },
  bag: [
    {type: Schema.Types.ObjectId }
  ]
})

module.exports = mongoose.model('User', userSchema );