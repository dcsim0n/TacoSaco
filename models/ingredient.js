/*
| Ingredient model
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schmea({
    title: { type: String },
    image: { type: String },
    description: { type: String },
    userId: { type: Schema.Types.ObjectId },
})