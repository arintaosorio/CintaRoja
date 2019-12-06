const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    }, 
    genero: {
        type: String,
        //buena practica: poner enums en mayusculas siempre
        enum:['DRAMA', 'ACCION','COMEDIA']
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'director'
    }

});

const pelicula = mongoose.model('pelicula', peliculaSchema);

module.exports = pelicula;