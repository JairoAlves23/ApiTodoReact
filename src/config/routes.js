const express = require('express')

//Função
module.exports = server => {
    const router = express.Router()
    server.use('/api',router)
    const todoService = require('../api/todo/todoService')
    todoService.register(router,'/todos')
}