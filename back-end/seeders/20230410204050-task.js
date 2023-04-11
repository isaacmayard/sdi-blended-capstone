'use strict';
const fakers = require('../faker.js')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tasks', fakers.fakeTasks());
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tasks', null, {});
  }
};