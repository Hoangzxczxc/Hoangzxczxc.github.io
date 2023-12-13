var express = require('express');
var router = express.Router();
var MobileModel = require('../models/MobileModel');
const BrandModel = require('../models/BrandModel');

router.get('/', async (req, res) => {
    //SQL: SELECT * FROM brands
    var mobiles = await MobileModel.find({}).populate('brand');
    //console.log(brands);
    //res.send(brands);
    res.render('mobile/index', {mobiles}); //location: views/brand/index.hbs
})

router.get('/add',async (req, res) => {
    var brands = await BrandModel.find({})
    res.render('mobile/add', {brands}); //location: views/brand/
})

router.post('/add', async (req, res) => {
    var mobile = req.body;
//SQL: Insert into brands...
//Insert data to collection
    await MobileModel.create(mobile);
//redirect to index page after succeed
    res.send ('/mobile');
})


module.exports = router;