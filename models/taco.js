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
        {
            ingredientId: { type: Schema.Types.ObjectId, ref: 'Ingredient', required: true }
        }
    ],
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User', required: true
    }
})

module.exports = mongoose.model( 'Taco', tacoSchema );