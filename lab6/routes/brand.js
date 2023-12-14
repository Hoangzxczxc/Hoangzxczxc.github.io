var express = require('express');
var router = express.Router();
//import Model file
var BrandModel = require('../models/BrandModel');
var MobileModel = require('../models/MobileModel');

//URL : localhost:3001/brand
router.get('/', async (req, res) => {
   //SQL : SELECT * FROM brands
   var brands = await BrandModel.find({});
   //console.log(brands);
   //res.send(brands)
   res.render('brand/index', { brands });
   //location: views/brand/index.hbs
})

router.get('/add', (req, res) => {
   res.render('brand/add');
})

router.post('/add', async (req, res) => {
   //get data from client-side through form
   var brand = req.body;
   //SQL : INSERT INTO brands ...
   //insert data to collection
   await BrandModel.create(brand);
   //redirect to index page after succeed
   res.redirect('/brand');
})

router.get('/detail/:id', async (req, res) => {
   var id = req.params.id;
   //SQL: SELECT * FROM mobiles WHERE brand = "id"
   var mobiles = await MobileModel.find({ brand : id }).populate('brand');
   res.render('brand/detail', { mobiles })
})

module.exports = router;