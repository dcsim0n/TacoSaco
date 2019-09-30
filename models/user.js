/**
|--------------------------------------------------
| user model
|--------------------------------------------------
*/
const mongoose = require('mongoose');
const Schema = mongoos.Schema;

const userSchema = new Schema({
  name: { type: String, required: true},
  tacos: [
    { tacoId: { type: Schema.Types.ObjectId }}
  ],
  ingredients: [
    { ingredientId: { type: Schema.Types.ObjectId }} 
  ]
})

module.exports = mongoose.Model('User', userSchema );