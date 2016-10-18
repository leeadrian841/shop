var express = require('express')
var ejs = require('ejs')
var app = express()
var layout = require('express-ejs-layouts')
var bodyParser = require('body-parser')

var mongoose = require('mongoose')
mongoose.Promise = global.Promise

if (process.env.NODE_ENV === 'production') {
  mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds027295.mlab.com:27295/wdi6')
} else {
  mongoose.connect('mongodb://localhost/shop')
}

app.set('view engine', 'ejs')
app.use(layout)

app.use(express.static(__dirname + '/public'))

var usersRoutes = require('./routes/users')
var usersapiRoutes = require('./routes/users_api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/users', usersRoutes)
app.use('/api/users', usersapiRoutes)

app.listen(3000)
console.log('Server initiated')
