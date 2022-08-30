const express = require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user = {
        name: 'John Doe',
        email: 'john@gmail.com',
        city: 'New Delhi',
        skills: [
            'PHP', 
            'ReactJS', 
            'ExpressJS', 
            'NodeJs', 
            'MongoDB',
            'C++',
            'Python' 
        ]
    }
    res.render('profile', {user});
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/noPage.html`);
})

app.listen(5000);