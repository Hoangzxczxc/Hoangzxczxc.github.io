const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
res.send('<h1> This is demo page </h1>')

});



module.exports = router;