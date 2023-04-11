"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      taskId: DataTypes.INTEGER,
      admin: DataTypes.BOOLEAN,
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      loggedIn: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.hasMany(Model.Task, {
    foreignKey: "taskId",
  });
  return User;
};
