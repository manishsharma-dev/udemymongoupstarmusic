// Todo: Create Artist Model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
    },
    copiesSold: {
        type: Number,
    },
    numberTracks: {
        type: Number,
    },
    image: {
        type: String,
    },
    revenue: {
        type: String,
    }
});

module.exports = AlbumSchema;
