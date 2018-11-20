const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/main.routes');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: 'variables.env' });
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization');
    next();
});

app.use('/', routes);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB)
    .then(
        () => app.listen(process.env.PORT, () => console.log('App listening on port ' + process.env.PORT))
    )
    .catch(
        error => console.log(error)
    );
