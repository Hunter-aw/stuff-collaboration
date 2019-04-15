const express = require('express')
const request = require('request')
const router = express.Router()


const Model = require('../models/Model')


let slow = require("slow")

slow.go()

module.exports = router