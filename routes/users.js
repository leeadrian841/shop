var express = require('express')
var router = express.Router()

var User = require('../models/user')

router.get('/', function (req, res) {
  User.find({}, function (err, Users) {
    res.render('users/index', {
      Users: Users
    })
  })
})

module.exports = router
