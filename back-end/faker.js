const { faker } = require("@faker-js/faker");

module.exports = {
  fakeTasks: function () {
    let rows = [];
    for (let i = 1; i < 20; i++) {
      rows.push({
        userId: 1,
        title: faker.lorem.sentence(2),
        description: faker.lorem.sentence(2),
        dueDate: faker.date.future(10),
        completed: false,
        significant: false,
        createdAt: new Date(),
        updatedAt: new Date(),
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
  fakeUsers: function () {
    let rows = [];
    for (let i = 1; i < 5; i++) {
      rows.push({
        admin: false,
        userName: faker.name.firstName(),
        password: faker.name.jobType(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        rank: faker.name.prefix(),
        supervisor: faker.name.firstName(),
        contact_number: faker.datatype.bigInt(100n),
        work_section: faker.address.city(),
        unit: faker.address.buildingNumber(),
        loggedIn: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    return rows;
  },
};
