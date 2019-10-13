/*
| Taco model
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tacoSchema = new Schema({
    title: {type: String},
    image: {type: String},
    description: {type: String},
    ingredients: [
         { type: Schema.Types.ObjectId, ref: 'Ingredient'}
    ],
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User', required: true
    }
})

module.exports = mongoose.model( 'Taco', tacoSchema );