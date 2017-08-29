const express = require('express');
const Shoe = require('../models/shoe')
const router = express.Router();

let results = [];

// function getShoe() {
//   Shoe.find({}).sort('name')
//   .then(function(shoe) {
//     results = shoe;
//     next();
    // res.render('view')
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
//   shoeDetails: [{
//     heelHeight: 3,
//     size: 6,
//     color: "white",
//     material: ["synthetic", "man-made"]
//   }]
// })
// .then(function(data) {
//   console.log(data);
// })
// .catch(function(data) {
//   console.log(err);
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
  // res.render('view', {shoe: results});
});
// // , {shoes: results} goes in get
//
router.post('/', function(req, res) {

  Shoe.create({
    name: req.body.name,
    shoeType: req.body.shoeType,
    shoeStyle: req.body.shoeStyle,
    shoeDetails: [{
      heelHeight: req.body.heelHeight,
      color: req.body.color,
      material: req.body.material
    }]
  })
  .then(function(data) {
    // console.log(data);
    res.redirect('/')
  })
  .catch(function(err) {
    console.log(err);
  })
  // res.redirect('/', {})
});

// router.post('/delete/:name', function(req, res) {
  // let name = req.body.name;
  //
  // Shoe.deleteOne(name: name)
  // .then(function(data) {
  //   res.redirect('/')
  // })
  // .catch(function(err) {
  //
  // })
// });

// router.get('/edit/:name', function(req, res) {
  // let name = req.params.name;
//   res.redirect('/');
// });
// findOne
// router.post('/edit/:name', function(req, res) {
  // let name = req.params.name;
//   res.redirect('/');
// });
// update
module.exports = router;
