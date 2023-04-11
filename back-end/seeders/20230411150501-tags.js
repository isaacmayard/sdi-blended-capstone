'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tags", [
      {
        taskId: 1,
        name: "Outage",
        mslId: 1,
      },
      {
        taskId: 2,
        name: "Important",
        mslId: 1,
      },
      {
        taskId: 3,
        name: "Visitor",
        mslId: 1,
      },
      {
        taskId: 4,
        name: "Ticket Created",
        mslId: 1,
      },
      {
        taskId: 5,
        name: ";aksjd;lkjasd",
        mslId: 1,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tags", null, { cascade: true });
  },
};