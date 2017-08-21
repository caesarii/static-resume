const express = require('express')

const { log } = require('../utils')

const index = express.Router()

index.get('/', (request, response) => {
    response.render('admin/index.html')
})

index.get('/email', (request, response) => {
    response.render('admin/email.html')
})
index.get('/note', (request, response) => {
    response.render('admin/note.html')
})

module.exports = index