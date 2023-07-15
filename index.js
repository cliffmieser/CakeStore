const express =require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');


app.use(express.static(path.join(__dirname + '/public')));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) =>{
    res.render('home');
})

app.get('/about', (req, res) =>{
    res.render('about');
})

app.get('/login', (req, res) =>{
    res.render('login');
})

app.get('/register', (req, res) =>{
    res.render('register');
})

app.listen(3000, () =>{
    console.log('Listening on port 3000');
})