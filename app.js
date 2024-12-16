const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const databaseLink = 'mongodb+srv://devtaim:PNFGRSsHGVS00dIr@cluster0.1vbrm.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0';
app.use(express.urlencoded({extended:true}));
const MyData = require("./models/schema");


app.get('/', (req, res) => {
    res.sendFile("./views/home.html", {root: __dirname})
})

mongoose.connect(databaseLink).then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`);
    })
}).catch((error) => {
    console.log(error);
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.redirect("/index.html")
})