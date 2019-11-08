const express = require('express')

const SessionController = require('./controller/sessionController')
const ComentController = require('./controller/comentController')
const ShowController = require('./controller/showController')

const routes = express.Router()

routes.post('/sessions', SessionController.store)

routes.post('/coments', ComentController.store)

routes.get('/shows', ShowController.show)

module.exports = routes