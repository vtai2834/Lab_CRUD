"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        username: "admin@mail.com",
        password: "AXI3CxWdu",
        firstName: "Enrico",
        lastName: "De Ferraris",
        mobile: "506-883-2766",
        imagePath: "/assets/img/avatars/0.jpeg",
        isAdmin: true,
      },
      {
        username: "lcarlick1@furl.net",
        password: "kUzhyPDAB",
        firstName: "Lisle",
        lastName: "Carlick",
        mobile: "685-500-0168",
        imagePath: "/assets/img/avatars/1.png",
      },
      {
        username: "fochiltree2@nytimes.com",
        password: "x1Q3NnKVg5oB",
        firstName: "Frederich",
        lastName: "Ochiltree",
        mobile: "387-491-7478",
        imagePath: "/assets/img/avatars/5.png",
        isAdmin: true,
      },
      {
        username: "dblasetti3@wufoo.com",
        password: "vY3dpY",
        firstName: "Dorolisa",
        lastName: "Blasetti",
        mobile: "768-449-9990",
        imagePath: "/assets/img/avatars/6.png",
      },
      {
        username: "ryelland4@de.vu",
        password: "RNqceiBJWMjI",
        firstName: "Rosaleen",
        lastName: "Yelland",
        mobile: "658-130-3536",
        imagePath: "/assets/img/avatars/7.png",
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Users", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
