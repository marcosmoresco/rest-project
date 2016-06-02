var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;


var ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String
});

var Product = mongoose.model('Product', ProductSchema, 'product');

module.exports = Product;
