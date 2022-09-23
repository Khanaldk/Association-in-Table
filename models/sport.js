'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sport.belongsTo(models.student,{as:'student',foreignKey:'sportid'})
      sport.hasMany(models.school,{as:'reply',foreignKey:'class'});
    }
  }
  sport.init({
    sportgame: DataTypes.STRING,
    sportid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sport',
  });
  return sport;
};