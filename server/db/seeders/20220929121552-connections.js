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
