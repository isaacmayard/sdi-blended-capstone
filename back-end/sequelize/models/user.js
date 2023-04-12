'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  User.init({
    admin: DataTypes.BOOLEAN,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    loggedIn: DataTypes.BOOLEAN,
    rank: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    supervisor: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    work_section: DataTypes.STRING,
    unit: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
