/*
| Ingredient model
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    title: { type: String },
    image: { type: String },
    description: { type: String },
    userId: { type: Schema.Types.ObjectId },
})

module.exports = mongoose.model('Ingredient', ingredientSchema);