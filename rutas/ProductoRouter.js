const {Router}=require('express')

const ProductoController=require('../controllers/ProductoController')
const route=Router()

route.get('/producto',ProductoController.getProducto)
route.post('/producto',ProductoController.crearProducto)
route.get('/producto/:id',ProductoController.getProductoId)
route.put('/producto/:id',ProductoController.actualizarProducto)
route.delete('/producto/:id',ProductoController.eliminarProducto)

module.exports=route