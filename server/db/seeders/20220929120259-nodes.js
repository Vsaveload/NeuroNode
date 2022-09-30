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
        content: 'shodili v dush podskolznulis i sdohli',
        project_id: 1,
        isFirst: false,
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
      {
        name: 'NACHNEMS',
        content: 'vi prishli v elbrus',
        project_id: 2,
        isFirst: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Poest ponchikov',
        content: 'plus respekt i sahar',
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Poigrat v tennis',
        content: 'obigrali Seregu',
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rasskazat anekdot',
        content: 'razrivnaya',
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bahnut i poiti',
        content: 'raz dva tri',
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pozalipat v monitor',
        content: 'kak eto rabotait',
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vihod',
        content: 'vi vishli iz elbrusa',
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'KONETS',
        content: 'vi sdohli',
        project_id: 2,
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
