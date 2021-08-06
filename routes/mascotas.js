// 1. IMPORTACIONES

const express               = require('express')
const router                = express.Router()
const mascotasController    = require('./../controllers/mascotaController')

// 2. ROUTEO

router.get('/', mascotasController.obtenerMascotas)

// 3. EXPORTACION

module.exports = router