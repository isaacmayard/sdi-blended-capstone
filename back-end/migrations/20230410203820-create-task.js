'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      due_date: {
        type: Sequelize.STRING
      },
      completed: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      significant: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      date_created: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_modified: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};