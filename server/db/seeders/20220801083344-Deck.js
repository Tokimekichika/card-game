module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Decks', [{
      title: 'пират-вар',
      active: false,
      user_id: 1,
      card_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
