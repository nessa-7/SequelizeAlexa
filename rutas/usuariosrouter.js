const {Router}=require('express')

const UsuarioController=require('../controllers/UsuarioController')
const route=Router()

route.get('/prueba',UsuarioController.prueba)
route.get('/usuario',UsuarioController.getUsuarios)

module.exports=route