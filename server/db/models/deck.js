const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserDeck }) {
      Deck.belongsTo(UserDeck, { foreignKey: 'deck_id' });
      // define association here
    }
  }
  Deck.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    card_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};
