'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
      student.hasMany(models.sport,{as:'comment',foreignKey:'sportid'})
      // student.hasMany(models.school,{as:'school',foreignKey:'class'})
      

    }
  }
  student.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};