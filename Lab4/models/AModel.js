var mongoose  = require('mongoose')
var Mobile = mongoose.Schema({
    model: String,
    brand: String,
    color:String,
    price: String,
    image: String
});
var AModel = mongoose.Model('Umbalaa', AModel, 'demo');
module.exports = AModel;