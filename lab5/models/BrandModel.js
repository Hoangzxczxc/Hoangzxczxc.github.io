var mongoose = require('mongoose');
var BrandSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name can not be empty'],
        minLength: 3,
        maxLength: 20
    },
    //without validation
    country: String
});
//case 1: collection name without "s"
var BrandModel = mongoose.model("brands", BrandSchema);
//case 2: collection name with "s" var BrandModel = mongoose.model("brand", BrandSchema, "brand");

module.exports = BrandModel;