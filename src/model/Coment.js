const mongoose = require('mongoose')

const ComentSchema = new mongoose.Schema({
    comentario: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

module.exports = mongoose.model('Coment', ComentSchema)
