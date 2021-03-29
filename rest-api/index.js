const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const { PORT } = require('./config/config');
const router = require('./routes');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',  // <--- url of the SPA
    optionsSuccessStatus: 200,
    methods: 'GET, POST, PUT, PATCH, DELETE'
}));

require('./config/database');
require('./config/passport')(passport);
app.use(passport.initialize());


app.use('/api', router);

app.listen(process.env.PORT, () => console.log(`Server is listening on port: ${process.env.PORT}...`));