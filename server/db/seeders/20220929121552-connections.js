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
        from: 1,
        to: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 1,
        to: 4,
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
        from: 2,
        to: 4,
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
        to: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 6,
        to: 7,
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
        from: 7,
        to: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 1,
        to: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 1,
        to: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 1,
        to: 4,
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
        from: 2,
        to: 4,
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
        to: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from: 6,
        to: 7,
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
        from: 7,
        to: 8,
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
