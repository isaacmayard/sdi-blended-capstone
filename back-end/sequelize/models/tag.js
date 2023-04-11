"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tag.init(
    {
      taskId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      mslId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  Tag.hasMany(Model.Task, {
    foreignKey: taskID,
  });
  Tag.hasMany(Model.Msl, {
    foreignKey: mslId,
  });
  return Tag;
};
