var express = require('express')
var router = express.Router()

var User = require('../models/user')

router.get('/', function (req, res) {
  User.find({}, function (err, Users) {
    res.json(Users)
  })
})

router.post('/', function (req, res) {
  User.create(req.body.user, function (err, newUser) {
    res.json(newUser)
  })
})

module.exports = router
