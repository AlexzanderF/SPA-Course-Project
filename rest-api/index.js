const express = require('express');
const app = express();
const { PORT } = require('./config/config');
const router = require('./routes');
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',  // <--- url of the SPA
    optionsSuccessStatus: 200,
    methods: 'GET, POST, PUT, PATCH, DELETE'
}));

require('./config/database');

app.use('/api', router);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));