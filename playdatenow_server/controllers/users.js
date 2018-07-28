const knex = require("../db/knex.js");

module.exports = {
    // CHANGE ME TO AN ACTUAL FUNCTION
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
    index: (req,res)=>{
        knex('users').then((results)=>{
            res.json(results);
        })
    },
    getOne: (req,res)=> {
        knex('users').where('id', req.params.id).then((results)=>{
            res.json(results[0]);
        })
    },
    delete: (req,res)=>{
        knex('users').delete().where('id', req.params.id).then(()=>{
            res.json(true);
        })   
    },
    update: (req,res)=>{
        knex('users').update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            zipcode: req.body.zipcode
        }).where('id', req.params.id).then(()=>{
            res.json(true);
        })
    }

}