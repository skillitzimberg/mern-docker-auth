const express = require('express');
// const app = express();
const router = express.Router();

//Schema
const User = require('../models/User');

// Get Specific
router.route('/:id').get(function (req, res) {
  const id = req.params.id;
  User.findById(id, function (err, item){
      res.json(item);
  });
});

// Get All Items
router.route('/').get(function (req, res) {
  User.find(function (err, items){
    if(err){
      console.log(err);
    } else {
      res.json(items);
    }
  });
});

// Add item
router.route('/add').post(function (req, res) {
  const item = new User(req.body);
      item.save()
    .then(item => {
    res.json('Added');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

//  Update Specific
router.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load record'));
    else {
      item.desc = req.body.desc;

      item.save().then(item => {
          res.json('Updated');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Delete Specific
router.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id},
       function(err, item){
        if(err) res.json(err);
        else res.json('Deleted');
    });
});

module.exports = router;