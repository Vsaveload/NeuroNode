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
        name: 'Красная шапочка',
        desc: 'Эксперементальное интерактивное издание',
        img: 'https://get.wallhere.com/photo/red-food-girl-fairytale-wolf-basket-littleredridinghood-fantasy-hood-imagination-redridinghood-734466.jpg',
        category_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фильм',
        desc: 'Пример фильма',
        img: 'https://www.kino-teatr.ru/news/8550/86210.jpg',
        category_id: 2,
        user_id: 2,
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
