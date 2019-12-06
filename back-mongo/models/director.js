//primero mandamos a llamar a mongoose

const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    bio:{
        type: String,
        default: 'No-bio'
    },
    nacionalidad:{
        type: String,
        enum:['MX', 'USA', 'BR']
    },
    sexo:{
        type: String,
        enum: ['F', 'M', 'SN']
    },
    premios:{
        type:[String],
    }
});

const director = mongoose.model('director', directorSchema);

module.exports = director;