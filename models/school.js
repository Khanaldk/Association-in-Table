'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class school extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      school.belongsTo(models.sport,{as:'comment',foreignKey:'class'})
    }
  }
  school.init({
    name: DataTypes.STRING,
    class: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'school',
  });
  return school;
};