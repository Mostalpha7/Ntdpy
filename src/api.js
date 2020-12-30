const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require("body-parser");



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg: "Hello world"
    })
})

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email == "mujeeb@gmail.com" && password == "123456789") {
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
    const { fullName } = req.body;

    if (fullName == "Mustapha") {
        res.json({
            message: "Registration validated",
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