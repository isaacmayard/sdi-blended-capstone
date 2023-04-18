const { faker } = require("@faker-js/faker");

module.exports = {
  fakeTasks: function () {
    let rows = [];
    for (let i = 1; i < 211; i++) {
      rows.push({
        userId: 1,
        title: faker.lorem.sentence(2),
        description: faker.lorem.sentences(3),
        dueDate: faker.date.between(
          "2023-01-01T00:00:00.000Z",
          "2023-07-01T00:00:00.000Z"
        ),
        completed: faker.datatype.boolean(),
        significant: false,
        createdAt: new Date(),
        updatedAt: faker.date.between(
          "2023-01-01T00:00:00.000Z",
          "2023-07-01T00:00:00.000Z"
        ),
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
        userName: faker.internet.userName(),
        password: faker.internet.password(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        rank: faker.name.prefix(),
        supervisor: `${faker.name.prefix()} ${faker.name.firstName()} ${faker.name.lastName()}`,
        contact_number: faker.phone.number(),
        work_section: `${faker.company.bsNoun()}`,
        unit: faker.address.buildingNumber(),
        loggedIn: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    return rows;
  },
};
