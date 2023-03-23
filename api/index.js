const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors'); //To avoid CORS error when there is communication between two ports on the same localhost
// const { default: mongoose } = require('mongoose');
require('dotenv').config(); // To make ENV Varibales work through process.env.MONGO_URL
const app = express();
app.use(express.json()) // To Parse Response JSON Data. 
app.use(cors({
    credentials: true,
    origin:'http://localhost:5173',
}));
mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok');
});
app.post('/register', (req, res) => {
    const {name,email,password} = req.body;
    res.json({name,email,password});
})

app.listen(4000);