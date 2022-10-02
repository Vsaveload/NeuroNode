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
    await queryInterface.bulkInsert('Users', [
      {
        name: 'bob',
        password: await bcrypt.hash('123', 10),
        email: 'bob@bob',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'bab',
        password: await bcrypt.hash('321', 10),
        email: 'bab@bab',
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
    await queryInterface.bulkDelete('Users', null, {});
  },
};
