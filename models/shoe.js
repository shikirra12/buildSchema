const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/shoeDirectory');

const shoeSchema = new Schema({
  name: {
    type: String, required: true, unique: true
  },
  shoeType: {
    type: String,
    required: true
  },
  shoeStyle: {
    type: String
  },
  shoeDetails: [{
    heelHeight: {type: Number, min: [1, "Gotta have some height!"]},
    size: {type: Number, min: [6, "Cannot be lower the size 6"], max: [10, "Cannot be greater than size 10"]},
    color: {String},
    material: [String]
  }]
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
