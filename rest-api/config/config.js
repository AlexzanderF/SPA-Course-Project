module.exports = {
    development: {
        PORT: process.env.PORT || 6001,
        DB_URI: 'mongodb+srv://Defensi4a:a14789632@devushka.eu2ox.mongodb.net/workout-tracker?retryWrites=true&w=majority',
        SECRET: '390b7f6f0b6f15b4e13d95b56956035b704729c6b425e1a48d23bb7d45d3b5cd6105d4773a7b4556b92e43677c07f87047930533762b17b9274cf11b55c81493',
    },
    production: {
        PORT: process.env.PORT,
        DB_URI: 'mongodb+srv://Defensi4a:a14789632@devushka.eu2ox.mongodb.net/workout-tracker?retryWrites=true&w=majority',
    }
}[process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development'];