module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      image_url:{
        type: Sequelize.TEXT,
      },
      likes: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      dislikes: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      user_name: {
        type: Sequelize.TEXT,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'login'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  },
};
