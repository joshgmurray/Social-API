const express = require('express');
const router  = express.Router();
const User = require('../model/user.model')

router.get('/', (req, res) => {
    User.find({}).then((users) => {
        res.json(users)
    }).catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id, (idnotfound, user) => {
        if(idnotfound) {
            res.status(500).send("user not found");
        } else {
            res.json(user)
        }
    })
});

router.post('/', (req, res) => {
    console.log(req.body);
    User.create(new User(req.body)).then((user) => {
        console.log('add new user ===', user);
        res.status(200).json(user);
    }).catch((err) => {
        console.log('add new user error ===', err);
        res.status(500).send(err);
    })
});

router.delete('/:id', (req, res) => {
    User.deleteOne(req.params.id, (res) => {
        if(res) {
            res.status(500).send("user delete success");
        } 
    }).catch((err) => console.log(err))
});


module.exports = router;