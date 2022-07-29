const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Like }) {
      Post.belongsTo(User, { foreignKey: 'user_name' });
      Post.belongsToMany(User, { through: Like, foreignKey: 'post_id', otherKey: 'user_name' });
      Post.hasMany(Like, { foreignKey: 'post_id', onDelete: 'cascade' });
    }
  }
  Post.init({
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.TEXT,
    },
    likes: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    dislikes: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    user_name: {
      allowNull: true,
      type: DataTypes.TEXT,
      references: {
        model: 'Users',
        key: 'login',
      },
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
