"use strict";
"use strict";
const crypto = require("node:crypto");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Addresses",
      [
        {
          id: crypto.randomUUID(),
          userId: "07c07804-7b35-4ee9-bf91-78799476d8e3",
          address: "Jalan Manokwari No. 1",
          subDistrict: "Pekalongan Barat",
          city: "Pekalongan",
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
