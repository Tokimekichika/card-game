'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
        {
      name: 'Polyasha',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HZ9YKYQM-f48939db467d-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  await queryInterface.bulkInsert('Cards', [{
    name: 'Polina',
    photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HVD5B086-cf4ff759fef7-512',
    description: '123',
    damage: 2,
    health: 2,
    manaCost:2,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Leha',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JG83KR9S-62f98f24a4e9-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Alisa',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HWJYTUK0-306b7b99b5f0-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Artem',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03K3L3SA1H-1926761efff5-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Anya',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03MFMM56FJ-5cfebfdbfd43-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Damir',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JAUBQLA1-f0a832383b6d-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Lena',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J37X5HHB-0361cf6ea93f-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Kiril',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JEBVTG1H-3dc19c056464-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Leila',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JJQKB1GR-58763725019a-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Kadj',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J3CX6XHU-f14b29716e74-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Maksimilian',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J5TGFF0D-07c995e0f9f3-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Bublitos',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HVP5Q207-57b4ec11c38b-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Yura',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J34GTK53-911def767cdf-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Ulyana',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JCGPJH2Q-0bf567dd1de1-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Yurec',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JSHCUAL9-9e5e7fb1db94-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
