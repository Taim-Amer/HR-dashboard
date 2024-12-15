const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.sendFile("./views/home.html", { root: __dirname })
})

// app.listen(port, () => {
//     console.log(``)
// })

mongoose.connect('mongodb+srv://devtaim:PNFGRSsHGVS00dIr@cluster0.1vbrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => { 
    app.listen(port, () => {
        console.log('http://localhost:${port}/')
    })
}).catch((error) => {
    console.log(error);
})