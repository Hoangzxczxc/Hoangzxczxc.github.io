var mongoose = require('mongoose');
var BrandSchema = mongoose.Schema({
   //with validation
   name: {
      type: String,
      required: [true, 'name can not be empty'],
      minLength: 3,
      maxLength: [20, 'name length can not be over 20 characters']
   },
   //without validation
   country: String
});
//case 1: collection name without "s" => 3 arguments
//var BrandModel = mongoose.model("brand", BrandSchema, "brand");
//case 2: collection name with "s"    => 2 arguments : RECOMMENDED
var BrandModel = mongoose.model("brands", BrandSchema);
module.exports = BrandModel;
