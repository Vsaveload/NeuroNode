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
    await queryInterface.bulkInsert('Statistics', [
      {
        project_id: 1,
        connection_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 1,
        connection_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 1,
        connection_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 1,
        connection_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 1,
        connection_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 1,
        connection_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 1,
        connection_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 1,
        connection_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 1,
        connection_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 1,
        connection_id: 10,
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
    await queryInterface.bulkDelete('Statistics', null, {});
  },
};
