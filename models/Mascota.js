// 1. IMPORTACIONES

const mongoose = require('mongoose')

// 2. SCHEMA

const mascotaSchema = mongoose.Schema({
    raza: {
        type: String,
        required: true
    }
},
    {   
        timestamps: true
    }
)

// 3. MODELO

const Mascota = mongoose.model('Mascota', mascotaSchema)

// 4. EXPORTACIÓN

module.exports = Mascota