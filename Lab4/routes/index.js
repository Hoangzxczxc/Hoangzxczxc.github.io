var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cloud',(req, res) => {
  var address = 'so 2 pahm van bacher';
  res.render('cloud', {semester : "Fall 2023", address})
})

router.get('/mobile',(req, res) => {
  res.render('mobile', { mobiles});
})

module.exports = router;
