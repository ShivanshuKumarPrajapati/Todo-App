const router = require('express').Router();
const todoList = require('./../todoSchema/Schema');

router.route('/').get((req, res) => {
    todoList
        .find()
        .then((list) => res.json(list))
        .catch((err) => res.status(400).json("Error:" + err));
})


router.route('/add').post((req, res) => {
    
    const list = new todoList({
        title: req.body.title,
        note: req.body.note,
        id:req.body.id,
    })

    list.save()
        .then(() => res.json("Item added successfully"))
        .catch(err => res.status(400).json("Error: " + err));
})


module.exports = router;