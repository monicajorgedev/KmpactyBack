require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
PORT = process.env.PORT || 3000;
const dbConnection = require('./config/db')
const activityRoutes = require('./routes/activityRoutes')
const companyRoutes = require('./routes/companyRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', activityRoutes)
app.use('/', companyRoutes)

dbConnection()

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});