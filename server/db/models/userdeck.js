const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserDeck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Deck }) {
      // define association here
      // UserDeck.hasOne(Deck, { foreignKey: 'deck_id' });
    }
  }
  UserDeck.init({
    deck_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserDeck',
  });
  return UserDeck;
};
