module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Decks', [{
      user_id: 1,
      card_id: 1,
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Decks', null, {});
  },
};
