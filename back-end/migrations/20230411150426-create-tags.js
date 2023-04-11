"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      taskId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: "tasks",
          },
          key: "id",
        },
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
      },
      mslId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: "msl",
          },
          key: "id",
        },
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tags");
  },
};
