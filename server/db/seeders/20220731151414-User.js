module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      name: 'user',
      email: 'user@mail.ru',
      password: '123',
      photo: 'photo',
      coins: 999,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
