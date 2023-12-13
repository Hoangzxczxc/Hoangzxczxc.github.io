var express = require('express');
var router = express.Router();

//import Model file
var BrandModel = require('../models/BrandModel');

//url : localhost: 3001/brand
router.get('/', async (req, res) => {
    //SQL: SELECT * FROM brands
    var brands = await BrandModel.find({});
    //console.log(brands);
    //res.send(brands);
    res.render('brand/index', {brands}); //location: views/brand/index.hbs
})

router.get('/add', (req, res) => {
    res.render('brand/add');
})

router.get('/add', async (req, res) => {
    var brand = req.body;
//SQL: Insert into brands...
//Insert data to collection
    await BrandModel.create(brand);
//redirect to index page after succeed
    res.send ('/brand');
})

router.get ('/detail/:id', async (req, res) => {
    var id = req.params.id;
    //SQL: Select * from brand
    var mobile = await MobileModel.find({ brand : id });
    res.render ('brand/detail', { mobile})
})

module.exports = router;