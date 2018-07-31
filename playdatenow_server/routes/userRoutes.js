//Update the name of the controller below and rename the file.

//BELOW WORKS FINE
// const users = require("../controllers/users.js")
// module.exports = function (app) {

//     app.get('/users', users.index);
//     app.get('/users/:id', users.getOne);
//     app.post('/users', users.create);
//     app.put('/users/:id', users.update);
//     app.delete('/users/:id', users.delete);

// }

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/*GET users*/
router.get('/', function(req, res, next){
    knex('users').then(users=>res.json(users))
});

router.post('/', function (req, res) {
    knex('users').insert({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        zipcode: req.body.zipcode
    }).then(() => {
        res.json(true);
    })
});

module.exports= router;