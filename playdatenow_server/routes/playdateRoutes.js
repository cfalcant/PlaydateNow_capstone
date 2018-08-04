const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/*GET playdates*/
router.get('/', function (req, res, next) {
    knex('playdates').then(playdates => res.json(playdates))
});

/*GET a SINGLE playdate using ID */
router.get('/:id', function (req, res) {
    knex('playdates')
        .select()
        .where('id', req.params.id)
        .then(playdate => res.json(playdate[0]));
});

/*GET all playdates a user has joined ("active playdates")*/
router.get('/:id/playdates', function (req, res) {
    knex('playdates')
        .join('activeplaydates', 'activeplaydates.playdate_id', '=', 'playdates.id')
        .select('playdates.title', 'playdates.description','playdates.category')
        .where('activeplaydates.user_id', req.params.id)
        .then((currentPlaydates)=>{
            res.json(currentPlaydates)
        })
});

/*GET all playdates that a user has created themselves*/
router.get('/:id/myplaydates', function(req, res){
    knex('playdates')
        .join('users', 'users.id', '=', 'playdates.playdate_creator')
        .select('playdates.title', 'playdates.description', 'playdates.category', 'playdates.id')
        .where('users.id', req.params.id)
        .then((ownPlaydates)=>{
            res.json(ownPlaydates)
        })
})


// knex('users')
//     .join('activeplaydates', 'users.id', '=', 'activeplaydates.user_id')
//     .join('playdates', 'playdates.id', '=', 'activeplaydates.playdate_id')
//     .select('playdates.place', 'playdates.address', 'playdates.date', 'playdates.activity', 'playdates.notes')
//     .where('users.id', req.params.id)
//     .then(playdates => {
//         // console.log(playdates);
//         res.json(playdates);
//     });


/*POST new playdate*/
router.post('/', function (req, res) {
    knex('playdates')
        .insert(req.body, "*")
        .then(() => { 
            res.json(true);
        });
});

/*PUT method to update a playdate*/
router.put('/:id', function(req, res){
    knex('playdates')
        .update(req.body, "*")
        .where('id', req.params.id).then(()=>{
            res.json(true)
        })
});

router.delete('/:id', function(req,res){
    knex('playdates')
    .delete()
    .where('id', req.params.id)
    .then(() => {
        res.json(true);
    })
});
    
module.exports = router;