const Mascota = require('./../models/Mascota')

exports.obtenerMascotas = async (req, res) => {

    try {
        
        const mascotas = await Mascota.find({})

        console.log(mascotas)

        res.json(mascotas)

    } catch (error) {

    }

    
}