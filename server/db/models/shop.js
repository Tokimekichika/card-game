const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Pack }) {
      // define association here
      Shop.hasMany(Pack, { foreignKey: 'pack_id' });
      Shop.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Shop.init({
    user_id: DataTypes.INTEGER,
    pack_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};
