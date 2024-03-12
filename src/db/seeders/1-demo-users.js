"use strict";
"use strict";
const crypto = require("node:crypto");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "07c07804-7b35-4ee9-bf91-78799476d8e3",
          fullName: "FahmiFaza",
          email: "fahmifaza6@gmail.com",
          password: "123",
          birthDate: "2000-01-01",
          phoneNumber: "082222222222",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
