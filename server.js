const express=require('express')

const UsuarioRoute = require('./rutas/usuariosrouter')
const ProductoRoute = require('./rutas/ProductoRouter')

const app=express()
app.use(express.json())

//cors

app.use('/api',UsuarioRoute)
app.use('/api',ProductoRoute)

//servidor
app.listen(3000,()=>{
    console.log('Servidor corriendo en el puerto 3000')
})