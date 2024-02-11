// Todo: Create Artist Model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AlbumSchema = require('./album');

const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    yearsActive: {
        type: Number,
    },
    image: {
        type: String,
    },
    genre: {
        type: String,
    },
    website: {
        type: String,
    },
    netWorth: {
        type: Number,
    },
    labelName: {
        type: String,
    },
    retired: {
        type: Boolean,
    },
    albums: {
        type: [AlbumSchema],
    }
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;
