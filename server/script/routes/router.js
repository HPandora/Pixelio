const express = require('express')
var router = express.Router()

//HOME
router.get('/', function (req, res) {
  res.render('home', { title: 'Pixelio Home', name: 'Hey listen' })
  console.log('=> /')
  console.log(req.app.get('views'))
})
//SCORE
router.get('/score', function (req, res) {
  console.log('=> /score')
  res.render('score', { title: 'Pixelio Score Page', name: 'Hey listen to the ' })
  
 // req.on
})
module.exports = router