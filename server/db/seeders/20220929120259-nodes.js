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
    await queryInterface.bulkInsert('Nodes', [
      {
        name: 'Nochalo',
        content: 'vi prosnulis',
        project_id: 1,
        isFirst: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kushat',
        content: 'vkusno pozavtrakali',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dush',
        content: 'shodili v dush',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Zubi',
        content: 'jostka pochistili zubi',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Odejda',
        content: 'odelis',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Manatki',
        content: 'sobrali manatki',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vihod',
        content: 'vishli iz doma',
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Konec',
        content: 'vi sdohli',
        project_id: 1,
        isFirst: false,
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
    await queryInterface.bulkDelete('Nodes', null, {});
  },
};
