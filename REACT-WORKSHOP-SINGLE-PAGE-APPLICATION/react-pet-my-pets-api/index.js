const express = require('express');
const admin = require("firebase-admin");
const cors = require('cors');

const serviceAccount = require("../react-my-pets-a85f3-firebase-adminsdk-1cl2y-1cb89d9b94.json");

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;

    admin.auth()
        .verifyIdToken(token)
        .then((decodedToken) => {
            console.log(decodedToken);
            const uid = decodedToken.uid;
            
            res.json({ok: true});
          })
        .catch(err => {
            res.status(404).json({ok: false});
        });

})

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.listen(5001, console.log.bind(console, 'Server is running...'));