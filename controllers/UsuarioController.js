const { Usuario } = require('../models');

// Estructura de un controlador con funciones

/*export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};

export const getUsuarioPorEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const usuario = await Usuario.findOne({ where: { email } });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const { nombre, apellido, email, password } = req.body;
    const usuario = await Usuario.create({ nombre, apellido, email, password });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, email, password } = req.body;
    const usuario = await Usuario.update(
      { nombre, apellido, email, password },
      { where: { id } }
    );
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.destroy({ where: { id } });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};*/


// Estructura de un controlador con clases

const UsuarioController = {

  async prueba(req,res){
        res.json({"mensaje":'Hola esta es prueba'})
    },
    // Obtener todos los usuarios
  async getUsuarios(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },

  // Obtener un usuario por su id
  async getUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener usuario' });
    }
  },

  // Obtener un usuario por su email
  async getUsuarioPorEmail(req, res) {
    try {
      const { email } = req.params;
      const usuario = await Usuario.findOne({ where: { email } });
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener usuario' });
    }
  },

  // Crear un usuario
  async crearUsuario(req, res) {
    try {
      const { nombre, apellido, email, password } = req.body;
      const usuario = await Usuario.create({ nombre, apellido, email, password });
      res.status(201).json({ message: 'Usuario creado', usuario });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear usuario' });
    }
  },

  // Actualizar un usuario
  async actualizarUsuario(req, res) {
    try {
      const { id } = req.params;
      const { nombre, apellido, email, password } = req.body;
      const usuario = await Usuario.update(
        { nombre, apellido, email, password },
        { where: { id } }
      );
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar usuario' });
    }
  },

  // Eliminar un usuario
  async eliminarUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.destroy({ where: { id } });
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  }
};

module.exports = UsuarioController;
