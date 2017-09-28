const express = require('express');
const Shoe = require('../models/shoe')
const router = express.Router();

let results = [];

// function getShoe() {
//   Shoe.find({}).sort('name')
//   .then(function(shoe) {
//     results = shoe;
//     next();
//     res.render('view')
//     console.log(shoe);
//   })
//   .catch(function(err) {
//   console.log(err);
// });
// };
// Shoe.create({
//   name: "arella",
//   shoeType: "flat",
//   shoeStyle: "flatform",
//   shoeDetails: {
//     heelHeight: 3,
//     size: 6,
//     color: "white",
//     material: ["synthetic", "man-made"]
//   }
// })
// .then(function(data) {
//   console.log(data);
// })
// .catch(function(err) {
//   console.log("error creating shoes: ", err);
// });

router.get('/', function(req, res) {
  // let results = [];
  Shoe.find({}).sort('name')
  .then(function(shoe) {
    res.render('view',{shoe: shoe})
    console.log(shoe);
  })
  .catch(function(err) {
  console.log(err);
});
});

router.post('/', function(req, res) {

  Shoe.create({
    name: req.body.name,
    shoeType: req.body.shoeType,
    shoeStyle: req.body.shoeStyle,
    shoeDetails: {
      heelHeight: req.body.heelHeight,
      size: req.body.size,
      color: req.body.color,
      material: req.body.material
    }
  })
  .then(function(data) {
    res.redirect('/')
  })
  .catch(function(err) {
    console.log(err);
  })
});

router.get('/delete/:name', function(req, res) {
  let name = req.body.name;

  Shoe.deleteOne(name)
  .then(function(data) {
    res.redirect('/');
  })
  .catch(function(err) {
  console.log(err);
  })
});

router.get('/edit/:_id', function(req, res) {

Shoe.findOne({
    id: req.params.id
  })
  .then(function(data){
    console.log("data stuff", data);
    res.render('edit', {id: data._id});
  })
  .catch(function(err) {
    console.log(err);
  })
});

router.post('/edit/:_id', function(req, res) {

  Shoe.updateOne({
    id: req.params.id
  },
    {
    name: req.body.name,
    shoeType: req.body.shoeType,
    shoeStyle: req.body.shoeStyle,
    shoeDetails: {
      heelHeight: req.body.heelHeight,
      size: req.body.size,
      color: req.body.color,
      material: req.body.material
    }
  })
  .then(function(data) {
    console.log("This is shoe:", data);
    res.redirect('/');
  })
  .catch(function(err) {
    console.log(err);
  })
});


module.exports = router;
