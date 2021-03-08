module.exports = {
    development: {
        PORT: process.env.PORT || 6001,
        DB_URI: 'mongodb+srv://Defensi4a:a14789632@devushka.eu2ox.mongodb.net/workout-tracker?retryWrites=true&w=majority',
    },
    production: {
        PORT: process.env.PORT,
        DB_URI: 'mongodb+srv://Defensi4a:a14789632@devushka.eu2ox.mongodb.net/workout-tracker?retryWrites=true&w=majority',
    }
}[process.env.NODE_ENV.trim() || 'development'];