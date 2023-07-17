module.exports = (app) => {
    const songs = require('../controllers/songController')
    const router = require('express').Router()

    router.get('/', songs.findAll)
    router.post('/', songs.createSong)
    router.get('/:id', songs.playSong)

    app.use('/api/songs', router)
}