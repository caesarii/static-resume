const express = require('express')

const { log } = require('../utils')

const index = express.Router()

index.get('/', (request, response) => {
    response.render('admin/index.html')
})

index.get('/login', (request, response) => {
    response.render('admin/login.html')
})




index.get('/email', (request, response) => {
    response.render('admin/email.html')
})
index.get('/note', (request, response) => {
    response.render('admin/note.html')
})

index.get('/test', (request, response) => {
    response.render('admin/test.html')
})

module.exports = index