// 1. IMPORTACIONES

const express               = require('express')
const router                = express.Router()
const mascotasController    = require('./../controllers/mascotaController')

// 2. ROUTEO

// OBTENCIÓN DE TODAS LAS MASCOTAS
router.get('/', mascotasController.obtenerMascotas)

// CREAR UNA NUEVA MASCOTA

router.post('/crear', mascotasController.crearMascota)

// ACTUALIZAR UNA NUEVA MASCOTA

router.post('/actualizar', mascotasController.actualizarMascota)

// BORRAR UNA MASCOTA

router.post('/eliminar', mascotasController.eliminarMascota)

// 3. EXPORTACION

module.exports = router