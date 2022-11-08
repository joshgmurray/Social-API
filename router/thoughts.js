const express = require('express');
const router  = express.Router();
const Thought = require('../model/thought.model')

router.get('/', (req, res) => {
    Thought.find({}).then((users) => {
        res.json(users)
    }).catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
    Thought.findById(req.params.id, (idnotfound, thought) => {
        if(idnotfound) {
            res.status(500).send("thought not found");
        } else {
            res.json(thought)
        }
    })
});

router.post('/', (req, res) => {
    Thought.create(new Thought(req.body)).then((thought) => {
        console.log('add new thought ===', thought);
        res.status(200).json(thought);
    }).catch((err) => {
        console.log('add new thought error ===', err);
        res.status(500).send(err);
    })
});

router.delete('/:id', (req, res) => {
    Thought.deleteOne(req.params.id, (res) => {
        if(res) {
            res.status(500).send("thought delete success");
        } 
    }).catch((err) => console.log(err))
});


module.exports = router;