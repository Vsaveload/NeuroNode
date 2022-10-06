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
        name: 'Interactive books',
        desc: 'Be not just a reader, help the heroes to make their choice!',
        img: 'https://www.mgpu.ru/wp-content/uploads/2018/10/s1200.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Interactive instructions',
        desc: 'You will get a detail info about many different things',
        img: 'https://i.pinimg.com/originals/67/5b/f5/675bf5fcea0a39aa0186587e00193720.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Interactive tests',
        desc: 'Choose the faith of you test',
        img: 'https://testedu.ru/assets/templates/testedu/images/test.png',
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
