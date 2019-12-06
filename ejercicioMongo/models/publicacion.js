
const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
    texto: {
        type:String,
    }

});

const publicacion = mongoose.model('publicacion', publicacionSchema);

module.exports = publicacion;
