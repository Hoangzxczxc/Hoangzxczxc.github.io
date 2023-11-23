var express = require('express');
var router = express.Router();

/* GET home page. */
const express = require('express');
const router = express.Router();

// router.get('/green', function(req, res, next) {});
router.get('/greenwich', (reg, res) => {
  //view/greenwich.hbs
  res.render('greenwich')
});


module.exports = router;
