var express = require('express');
var router = express.Router();
var MobileModel = require('../models/MobileModel');
var BrandModel = require('../models/BrandModel');

router.get('/', async (req, res) => {
   var mobiles = await MobileModel.find({}).populate('brand');
   res.render('mobile/index', { mobiles })
})

router.get('/add', async (req, res) => {
   var brands = await BrandModel.find({});
   res.render('mobile/add', { brands });
})

router.post('/add', async (req, res) => {
   var mobile = req.body;
   await MobileModel.create(mobile);
   res.redirect('/mobile');
})

module.exports = router;