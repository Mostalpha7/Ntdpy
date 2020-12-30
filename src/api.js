const express = require('express');
const serverless = require('serverless-http');


const app = express();


const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg: "Hello world"
    })
})

router.get('/login/:username/:password', (req, res) => {
    const { username, password } = req.params;
    console.log(username, password);

    if (username == "mujeeb" && password == "123456789") {
        res.json({
            message: "Auth validated",
            token: "akmdaslala_akmlamklam_kmkakjakj_klamklaalmlka_klamkdsakjaj",
            user_id: "akdskaldsma",
        })
    } else {
        res.status(400).json({
            error: "Login failed",
        })
    }
})

router.post('/register', (req, res) => {
    const {
        fullName,
        phoneNumber,
        email,
        state,
        address,
        dateOfBirth,
        password,
    } = req.body;

    if (fullName == "Mustapha") {
        res.json({
            message: "Auth validated",
            token: "akmdaslala_akmlamklam_kmkakjakj_klamklaalmlka_klamkdsakjaj",
            user_id: "akdskaldsma",
        })
    } else {
        res.status(400).json({
            error: "Failed saving data failed",
        })
    }
})


app.use('/.netlify/functions/api', router);


module.exports.handler = serverless(app);