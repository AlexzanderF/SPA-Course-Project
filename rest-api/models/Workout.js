const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new Schema({
    createdBy: { type: Schema.Types.ObjectId, required: false },
    description: { type: String, maxlength: 1000 },
    exercises: { type: Object, default: {} }
},
    {
        timestamps: true,
        // if default value for the exercises is needed 
        // minimize: false
    });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;