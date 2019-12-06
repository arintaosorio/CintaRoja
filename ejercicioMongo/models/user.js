
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    sexo:{
        type: String,
        enum: ['F', 'M', 'SN']
    },
    publicacion: mongoose.Schema.Types.ObjectId,
    ref:'publicacion'

})

const user = mongoose.model('user', userSchema);

module.exports = user;