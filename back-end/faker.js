const { faker } = require("@faker-js/faker");

module.exports = {
  fakeTasks: function () {
    let rows = [];
    for (let i = 1; i < 20; i++) {
      rows.push({
        title: faker.lorem.sentence(2),
        description: faker.lorem.sentence(2),
        due_date: faker.date.future(10),
        completed: false,
        significant: false,
        date_created: new Date(),
        date_modified: new Date(),
      });
    }
    return rows;
  },
  fakeMSL: function () {
    let rows = [];
    for (let i = 1; i < 20; i++) {
      rows.push({
        title: faker.lorem.sentence(2),
        description: faker.lorem.sentence(2),
        user_id: 1,
        date_created: new Date(),
      });
    }
    return rows;
  },
};
