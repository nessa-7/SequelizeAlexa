'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trabajo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Trabajo.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id',
        as: 'usuario'
      });
    }
  }
  Trabajo.init (
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      fecha: DataTypes.DATE,
      hora: DataTypes.TIME,
      usuario_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Trabajo',
      tableName: 'trabajos'
    }
  );
  return Trabajo;
};