const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));


const getDataRouter = require('./routes/getData');

app.use('/getData', getDataRouter);


app.get('/', (req, res) => {
    res.send(`<h1>Week3 Assignment 1</h1> <p>Hello, there!<p>`);

});


app.get('/myName', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('myName', { name: name });
    } else {
        res.render('myName');
    }
});

app.get('/trackName', (req, res) => {
    const name = req.query.name;
    res.cookie('username', name);
    res.redirect('/myName');
});

app.post('/bye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/myName');
});




app.listen(3000, () => {
    console.log('the app is running on localhost:3000');
});