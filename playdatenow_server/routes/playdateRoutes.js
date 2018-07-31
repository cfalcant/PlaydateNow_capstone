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
            res.send('Playdate successfully updated')
        })
});

router.delete('/:id', function(req,res){
    knex('playdates')
    .delete()
    .where('id', req.params.id)
    .then(() => {
        res.send('Playdate successfully DELETED');
    })
});
    
module.exports = router;