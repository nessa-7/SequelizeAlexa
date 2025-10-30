const { Producto } = require('../models');

const ProductoController={

    async getProducto(req,res){
        try {
            const productos = await Producto.findAll();
            return res.json(productos);
        } catch (error) {
            return res.status(500).json({ error: 'Error al obtener productos' });
        }
    },

    async crearProducto(req,res){
        try {
            const { nombre, precio } = req.body;
            const nuevoproducto = await Producto.create({ nombre, precio });
            return res.json({"mensaje": "Producto creado exitosamente", producto:nuevoproducto});
        } catch (error) {
            return res.status(500).json({ error: 'Error al crear producto' });
        }               
    },

    async getProductoId(req,res){
        try {
            const { id } = req.params;
            const buscar = await Producto.findByPk(id);
            if (!buscar) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            return res.json(buscar);
        } catch (error) {
            return res.status(500).json({ error: 'Error al obtener producto' });
        }
    },

    async actualizarProducto(req,res){
        try {
            const { id } = req.params;
            const { nombre, precio } = req.body;
            const buscar = await Producto.findByPk(id);
            if (buscar) {
                buscar.nombre = nombre;
                buscar.precio = precio;
                await buscar.save();
                
                return res.json({ mensaje: 'Producto actualizado exitosamente', producto: buscar });

            } else {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Error al actualizar producto' });
        }
    },              

    async eliminarProducto(req,res){        
        try {
            const { id } = req.params;
            const buscar = await Producto.findByPk(id);
            if (buscar) {
                await buscar.destroy();
                return res.json({ mensaje: 'Producto eliminado exitosamente' });
            } else {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Error al eliminar producto' });
        }
    }
}

module.exports=ProductoController;