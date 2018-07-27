const knex = require("../db/knex.js");

module.exports = {
    // CHANGE ME TO AN ACTUAL FUNCTION
    index: function (req, res) {
        res.send("Hello");
    },

    create: function (req, res) {
        knex('users').insert({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            zipcode: req.body.zipcode
        }).then(()=>{
            res.json(true);
        })
    },

}