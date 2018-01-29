var express = require('express')
var app = express()
var path = require('path')
var router = require('./routes/router')
var server = app.listen(process.env.port || 3000)
var io = require('socket.io')(server)
/////////////////////////////////////////////////

app.set('socketio', io)
app.set('views', './client/views')
app.set('view engine', 'pug')
app.use('/lib',express.static('./client/lib/'))
app.use('/js',express.static('./client/js/'))
app.use('/public', express.static('./client/public/'))
app.use('/', router)




   io.on('connection', function(){
       console.log(" 1 personne c'est connecter a la page home !") 
   })


