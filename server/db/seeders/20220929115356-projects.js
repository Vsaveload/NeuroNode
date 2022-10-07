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
        name: 'Первая помощь',
        desc: 'Инструкция по оказанию первой помощи. Взято с сайта МЧС',
        img: 'https://pardou11.crimea-school.ru/sites/default/files/images/06122065_1.jpg',
        category_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ийон Тихий. Путешествие 7',
        desc: 'Научная фантастика',
        img: 'http://bvi.rusf.ru/lem/l_ill/zd/lzd5b015.jpg',
        category_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Пещера ужасов',
        desc: 'Интерактивное приключение',
        img: 'https://i.ytimg.com/vi/ATt6q2Nyqfc/maxresdefault.jpg',
        category_id: 1,
        user_id: 1,
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
