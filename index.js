// 1. IMPORTACIONES

const express = require ('express')
const connectDB = require ('./config/db')
const app = express()
const cors = require('cors')


// 2. MIDDLEWARES

// VARIABLES DE ENTORNO
require('dotenv').config()

// CONEXIÓN A DB
connectDB()

// HABILITAR CORS (cross origin resource sharing)
app.use(cors())


// 3. RUTEO

// API
app.use('/api/proyectos', require('./routes/proyectos'))

app.use('/api/mascotas', require('./routes/mascotas'))

// MONITOREO (PARA VER QUE SÍ FUNCIONE)
app.get('/', (req, res) => {
    res.send('Hola mundo')
})

// 4. SERVIDOR

app.listen(process.env.PORT, () => {
    console.log(`Conectados al servidor en el puerto ${process.env.PORT}`)
})