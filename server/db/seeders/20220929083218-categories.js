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
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Super blockbusteri',
        desc: 'Okunites v preklucheniya',
        img: 'https://i.scdn.co/image/ab6761610000e5ebc94fb92f8143c3637c6f7b80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Religioznaya fantastica',
        desc: 'O prevet ya tebya znau',
        img: 'https://2ch.hk/b/thumb/206628817/15726969319170s.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kulinaria',
        desc: 'Recepti joskih pelmenei',
        img: 'https://www.difoodlover.com/wp-content/uploads/2022/02/photo_2022-02-06_20-41-55.jpg',
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
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
