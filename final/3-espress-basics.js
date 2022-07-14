const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('user hit home resource');
    res.status(200).send('home page');
});

app.get('/about', (req, res) => {
    console.log('user hit about resource');
    res.status(200).send('about page');
});

app.all('*', (req, res) => {
    console.log('user hit not found resource');
    res.status(404).send('not found page');
});

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
});