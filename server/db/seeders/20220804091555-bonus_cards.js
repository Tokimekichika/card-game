module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bonus_cards', [
      {
        name: 'qweq',
        imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HZ9YKYQM-f48939db467d-512',
        info: '123',
        attack: 33,
        health: 33,
        mana: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    await queryInterface.bulkInsert('bonus_cards', [
      {
        name: 'qweqeqwe',
        imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HZ9YKYQM-f48939db467d-512',
        info: '123',
        attack: 33,
        health: 33,
        mana: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    await queryInterface.bulkInsert('bonus_cards', [
      {
        name: 'qweqzzz',
        imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HZ9YKYQM-f48939db467d-512',
        info: '123',
        attack: 33,
        health: 33,
        mana: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    await queryInterface.bulkInsert('bonus_cards', [
      {
        name: 'qweqsdcsd',
        imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HZ9YKYQM-f48939db467d-512',
        info: '123',
        attack: 33,
        health: 33,
        mana: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    await queryInterface.bulkInsert('bonus_cards', [
      {
        name: 'qweqasda',
        imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HZ9YKYQM-f48939db467d-512',
        info: '123',
        attack: 33,
        health: 33,
        mana: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },



  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
