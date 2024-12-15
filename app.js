const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.sendFile("./views/home.html", { root: __dirname })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => { }).catch((error) => {
    console.log(error);
 });