const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    notes: { type: String, maxlength: 1000, default: '' },
    createdBy: { type: String, required: true },  // user's email
    exercises: { type: Object, default: {} }
},
    {
        timestamps: true,
        // if default value for the exercises is needed 
        // minimize: false
    });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;