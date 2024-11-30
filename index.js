require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
PORT = process.env.PORT || 3000;
const dbConnection = require('./config/db')
const activityRoutes = require('./routes/activityRoutes')
const companyRoutes = require('./routes/companyRoutes')
const admin = require("firebase-admin");
const serviceAccount = require('./config/firebase')


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount) 
})

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());
// app.use(express.urlencoded({ extended: true  }));

app.use('/', activityRoutes)
app.use('/', companyRoutes)

dbConnection()

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});