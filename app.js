const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const databaseLink = 'mongodb+srv://devtaim:PNFGRSsHGVS00dIr@cluster0.1vbrm.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0';
app.use(express.urlencoded({ extended: true }));
const User = require("./models/customerSchema");
app.set('view engine', 'ejs');
app.use(express.static('public'));


// GET Requests 
app.get('/', (req, res) => {
    res.render('index', {});

})

app.get('/user/add.html', (req, res) => {
    res.render("user/add");
})

app.get('/user/edit.html', (req, res) => {
    res.render('user/edit');
})

app.get('/user/search.html', (req, res) => {
    res.render('user/search');
})

app.get('/user/view.html', (req, res) => {
    res.render('user/view')
})

//POST Request
app.post('/user/add.html', (req, res) => {
    console.log(req.body)
    const user = new User(req.body);
    user.save().then(() => {
        res.redirect('/user/add.html')
    }).catch((error) => {
        console.log(error)
    })
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

    const myData = new MyData(req.body);
    myData.save().then(() => {
        res.redirect("/index.html")
    }).catch((error) => {
        console.log(error)
    })
})