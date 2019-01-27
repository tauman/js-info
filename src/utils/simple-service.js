'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('GET /status/:status\nPOST /response/:status'));

app.post('/response/:status', function(req, res) {
    let status = Number(req.params.status);
    if(Number.isNaN(status) || status < 100 || status > 599) {
        status = 500;
    }

    console.log(req.body);

    res.status(status).send(req.body);
});

app.get('/status/:status', function(req, res) {
    let status = Number(req.params.status);
    if(Number.isNaN(status) || status < 100 || status > 599) {
        status = 500;
    }

    res.status(status).send('');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));

console.log('Started...');
