const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const databaseLink = 'mongodb+srv://devtaim:PNFGRSsHGVS00dIr@cluster0.1vbrm.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0';
app.use(express.urlencoded({extended: true}));
const MyData = require("./models/schema");
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Auto Refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer({ port: 35731 });
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

app.get('/', (req, res) => {
    MyData.find().then((result) => {
        res.render('home', {myTitle : "Home Page", arr : result});
    }).catch((error) => {
        console.log(error)
    })
})

app.get('/index.html', (req, res) => {
    res.send("<h1> Send Successfully !</h1>");
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