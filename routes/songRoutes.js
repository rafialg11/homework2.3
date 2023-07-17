module.exports = (app) => {
    const songs = require('../controllers/songController')
    const router = require('express').Router()

    router.get('/', songs.findAll)

    app.use('/api/songs', router)
}