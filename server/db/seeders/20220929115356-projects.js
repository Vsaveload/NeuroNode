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
    await queryInterface.bulkInsert('Projects', [
      {
        name: 'Shrek',
        desc: 'Super klassniy blockbuster',
        img: 'https://media.2x2tv.ru/content/images/2022/05/ssssss.jpg',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Osel',
        desc: 'Prosto otriv boshki',
        img: 'https://kartinkof.club/uploads/posts/2022-03/thumbs/1648243473_3-kartinkof-club-p-osel-shrek-mem-3.jpg',
        category_id: 2,
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
    await queryInterface.bulkDelete('Projects', null, {});
  },
};
