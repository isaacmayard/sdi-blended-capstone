"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      taskId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Tasks",
          key: "id",
          as: "taskId",
        },
      },
      admin: {
        type: Sequelize.BOOLEAN,
      },
      userName: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      loggedIn: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
