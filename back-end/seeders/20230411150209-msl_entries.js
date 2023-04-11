'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("msl", [
      {
        title: 1,
        description: "TEST",
        userId: 1,
        date_created: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("msl", null, { cascade: true });
  },
};
