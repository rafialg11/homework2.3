const db = require('../models');
const Song = db.songs;

exports.findAll = () => {
    return Song.find();
};

exports.createSong = (title, artists, url) => {
    const song = new Song({
        title: title,
        artists: artists,
        url: url
    });

    return song.save();
};

exports.playSong = (id) => {
    
    return Song.findById(id)
    .then((song) => {
        if (!song) {
            throw new Error('Song not found.');
        }
        song.playCount += 1; // Menambah 1 ke playCount
        return song.save(); // Menyimpan perubahan pada playCount
    });;
};
