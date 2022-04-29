const router = require('express').Router();
const User = require('./../todoSchema/UserSchema')

router.route('/').get((req, res) => {
    User
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

router.route('/update').post((req, res) => {
    
    User.findOneAndUpdate({ id: req.body.id }, { title: req.body.title, note: req.body.note })
        .then(() => res.json("Item updated successfully"))
        .catch(err => res.status(400).json(err));
    
    // res.redirect("/");
})

router.route('/:id').delete((req, res) => {
    const Id = req.params.id;
    todoList.deleteOne({ id: Id }, function (err) {
        if (err)
            res.json(err)
        else
            res.json("Successfully deleted item");
    })
})
    

module.exports = router;