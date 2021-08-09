const Mascota = require('./../models/Mascota')

exports.obtenerMascotas = async (req, res) => {

    try {
        
        const mascotas = await Mascota.find({})

        console.log(mascotas)

        res.json(mascotas)

    } catch (error) {

    }

    
}

exports.crearMascota = async (req, res) => {

    const { raza } = req.body

    try {

        const response = await Mascota.create({raza})

        res.json(response)

    } catch(error) {

    }

}


exports.actualizarMascota = async (req, res) => {

    const { mascotaId, raza } = req.body

    try {

        const response = await Mascota.findByIdAndUpdate(mascotaId, {raza}, {new: true})

        res.json(response)

    } catch (error) {

    }

}

exports.eliminarMascota = async (req, res) => {

    const { mascotaId } = req.body

    try {

        const resp = await Mascota.findByIdAndRemove({_id: mascotaId})

        res.json(resp)

    } catch(error){

    }
    
}