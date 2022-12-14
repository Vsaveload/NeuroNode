/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Connections', [
      {
        from: 1,
        to: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 2,
        to: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 3,
        to: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 3,
        to: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 4,
        to: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 5,
        to: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 5,
        to: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 6,
        to: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 6,
        to: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 7,
        to: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 8,
        to: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 9,
        to: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 10,
        to: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 10,
        to: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 10,
        to: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 10,
        to: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 10,
        to: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 10,
        to: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 11,
        to: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 12,
        to: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 13,
        to: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 14,
        to: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 15,
        to: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 16,
        to: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 17,
        to: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 19,
        to: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 19,
        to: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 20,
        to: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 20,
        to: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 21,
        to: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        from: 21,
        to: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 22,
        to: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 22,
        to: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 23,
        to: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 23,
        to: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 24,
        to: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 26,
        to: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 26,
        to: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 28,
        to: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 27,
        to: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 28,
        to: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 27,
        to: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 30,
        to: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 29,
        to: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 31,
        to: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 31,
        to: 33,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Connections', null, {});
  },
};
