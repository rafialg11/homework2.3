const songService = require('../services/songService');

exports.findAll = (req, res) => {
    songService.findAll()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving songs."
            });
        });
};

exports.createSong = (req, res) => {
    const { title, artists, url } = req.body;
    songService.createSong(title, artists, url)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while creating a song."
            });
        });
};

exports.playSong = (req, res) => {
    const id = req.params.id;
    songService.playSong(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while retrieving the song."
            });
        });
};