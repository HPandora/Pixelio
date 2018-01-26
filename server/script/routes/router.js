const express = require('express')
var router = express.Router()

//HOME
router.get('/', function (req, res) {
  res.render('home', { title: 'Pixelio Home', name: 'Hey listen' })
  console.log('=> /')
})
//SCORE
router.get('/score', function (req, res) {
  console.log('=> /score')
  res.send('Score Page')
  req.on
})
module.exports = router