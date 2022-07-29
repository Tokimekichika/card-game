const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post, Like }) {
      User.hasMany(Post, { foreignKey: 'user_name' });
      User.belongsToMany(Post, { through: Like, foreignKey: 'user_name', otherKey: 'post_id' });
      User.hasMany(Like, { foreignKey: 'user_name' });
    }
  }
  User.init({
    login: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
