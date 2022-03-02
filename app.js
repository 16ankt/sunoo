require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT
app.use(express.json())
app.use('/', require('./src/routes/index'))
require('./src/config/dbconnection')



app.listen(port, async () => {
    console.log('Server started at!!', port);
});