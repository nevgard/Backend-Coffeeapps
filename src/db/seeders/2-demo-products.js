"use strict";
"use strict";
const crypto = require("node:crypto");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          id: crypto.randomUUID(),
          name: "Cappuccino",
          price: 25000,
          image:
            "https://res.cloudinary.com/dkvk5btms/image/upload/v1707381231/Cappucino_xtggcv.png",
          category: "Kopi Signature",
          desctription: "Cappuccino with milk",
          stock: "ready",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          name: "Latte",
          price: 25000,
          image:
            "https://res.cloudinary.com/dkvk5btms/image/upload/v1707381230/Latte_zzuxj9.png",
          category: "Kopi Signature",
          desctription: "Latte with milk",
          stock: "ready",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          name: "Americano",
          price: 25000,
          image:
            "https://res.cloudinary.com/dkvk5btms/image/upload/v1707381231/Americano_jawf6a.png",
          category: "Kopi Signature",
          desctription: "Americano with milk",
          stock: "ready",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          name: "Kopi Petung",
          price: 25000,
          image:
            "https://res.cloudinary.com/dkvk5btms/image/upload/v1707381231/Petung_bda7di.png",
          category: "Kopi Lokal",
          desctription: "Kopi Petung with milk",
          stock: "ready",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          name: "Kopi Poncol",
          price: 25000,
          image:
            "https://res.cloudinary.com/dkvk5btms/image/upload/v1707381234/Poncol_cind00.png",
          category: "Kopi Lokal",
          desctription: "Kopi Poncol with milk",
          stock: "ready",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          name: "Kopi Kergon",
          price: 25000,
          image:
            "https://res.cloudinary.com/dkvk5btms/image/upload/v1707381232/Kergon_kxtg6b.png",
          category: "Kopi Lokal",
          desctription: "Kopi Kergon with milk",
          stock: "ready",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          name: "Taro",
          price: 25000,
          image:
            "https://res.cloudinary.com/dkvk5btms/image/upload/v1707381239/Taro_ov4pzk.png",
          category: "Non-Coffee",
          desctription: "Taro with milk",
          stock: "ready",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          name: "Matcha",
          price: 25000,
          image:
            "https://res.cloudinary.com/dkvk5btms/image/upload/v1707381225/Matcha_jhd9b1.png",
          category: "Non-Coffee",
          desctription: "Matcha with milk",
          stock: "ready",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          name: "Red Velvet",
          price: 25000,
          image:
            "https://res.cloudinary.com/dkvk5btms/image/upload/v1707381240/Red_Velvet_wjvaba.png",
          category: "Non-Coffee",
          desctription: "Red Velvet with milk",
          stock: "ready",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          name: "Ice Tea",
          price: 10000,
          image:
            "https://res.cloudinary.com/dkvk5btms/image/upload/v1707381448/esteh_juuptv.png",
          category: "Tea",
          desctription: "Ice Tea",
          stock: "ready",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          name: "Ice Tea",
          price: 10000,
          image:
            "https://res.cloudinary.com/dkvk5btms/image/upload/v1707381448/esteh_juuptv.png",
          category: "Tea",
          desctription: "Ice Tea",
          stock: "ready",
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
