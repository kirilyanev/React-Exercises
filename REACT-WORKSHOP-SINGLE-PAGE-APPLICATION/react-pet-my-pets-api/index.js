const express = require('express');
const admin = require("firebase-admin");
const cors = require('cors');

const isAuthenticated = require('./authMiddleware.js');

const serviceAccount = require("../react-my-pets-a85f3-firebase-adminsdk-1cl2y-1cb89d9b94.json");

const app = express();

app.use(cors());

app.get('/', isAuthenticated, (req, res) => {
  res.json({ok: true});
})

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.listen(5001, console.log.bind(console, 'Server is running...'));