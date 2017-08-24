const express = require('express');
const Shoe = require('../models/index')
const router = express.Router();

// let results = [];
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
  Shoe.find({})
  .then(function() {
    // results = data;
    console.log(shoe);
  })
//   .catch(function(err) {
//   console.log(err);
// });
  res.render('view', {shoeCraze: shoe})
});
// // , {shoes: results} goes in get
//
// router.post('/{{id}}/create', function(req, res) {
//
//   Shoe.create({
//     name: req.body.name,
//     shoeType: req.body.shoeType,
//     shoeStyle: req.body.shoeStyle,
//     shoeDetails: [{
//       heelHeight: req.body.shoeDetails[0].heelHeight,
//       color: req.body.shoeDetails[0].color,
//       material: req.body.shoeDetails[0].material
//     }]
//   })
//   .then(function(data) {
//     // shoe.model.push(Shoe);
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.log(err);
//   })
//   res.redirect('/', {nuShoe: results})
// });

// router.post('/{{id}}/delete', function(req, res) {
//   res.redirect('/')
// });

// router.post('/{{id}}/edit', function(req, res) {
//   res.redirect('/');
// });

module.exports = router;
