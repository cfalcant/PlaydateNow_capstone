const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
// const cors = require('cors');
// const logger = require('morgan');
const knex = require('./db/knex');

const users = require('./routes/userRoutes');
const playdates = require('./routes/playdateRoutes');
const activeplaydates = require('./routes/activeplaydateRoutes');

app.set('view engine', 'ejs');



app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', users);
app.use('/playdates', playdates);
app.use('/activeplaydates', activeplaydates);


// var routes_setter = require('./config/routes.js');
// routes_setter(app);

app.listen(port, function () {
    console.log('Listening on', port);
});
