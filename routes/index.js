const express = require('express')
const { log } = require('../utils')

const index = express.Router()

index.get('/', (request, response) => {
    response.render('index.html')
})
index.get('/login', (request, response) => {

    response.render('./login.html')
})
index.get('/resume', (request, response) => {

    response.render('./resume.html')
})

index.get('/admin', (request, response) => {

    response.render('./admin.html')
})

index.get('/email', (request, response) => {

    response.render('./email.html')
})

index.post('/form', (request, response) => {
    console.log('form', request.body)

    response.render('./index.html')
})


module.exports = index