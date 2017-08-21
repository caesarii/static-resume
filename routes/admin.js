const express = require('express')

// const User = require('../models/user')
const { log } = require('../utils')
// const { currentUser } = require('./main')


const index = express.Router()

index.get('/', (request, response) => {
    // const userList = User.all()
    // const u = currentUser(request)
    const args = {
        // users: userList,
        // user: u,
    }
    response.render('admin/index.html', args)
})

index.get('/email', (request, response) => {
    response.render('admin/email.html')
})
index.get('/note', (request, response) => {
    response.render('admin/note.html')
})

module.exports = index