const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema({
    name: { type: String, maxlength: 50 },
    muscles: { type: Array, default: [] }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;