const express = require('express')
const { log } = require('../utils')

const index = express.Router()

index.get('/', (request, response) => {

    response.render('index/index.html')
})
index.get('/login', (request, response) => {

    response.render('index/login.html')
})


module.exports = index