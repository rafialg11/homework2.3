const db = require('../models')
const Song = db.songs

exports.findAll = (req, res) => {
    Song.find()
    .then((result) =>{
        res.send(result)
    }).catch((err) =>{
        res.status(500).send({
            message: err.message || "Some error while retrieving songs."
        })
    });
}

exports.createSong = (req, res) => {
    const song = new Song({
        title: req.body.title,
        artists: req.body.artists,
        url: req.body.url
    })

    song.save(song)
    .then((result) =>{
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while retrieving songs."
        })
    })
}

exports.playSong = (req, res) => {
    const id = req.params.id
    Song.findById(id)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while retrieving songs."
        })
    })
}