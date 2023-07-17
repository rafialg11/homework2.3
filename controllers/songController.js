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