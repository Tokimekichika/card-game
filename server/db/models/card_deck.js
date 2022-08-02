'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class card_deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  card_deck.init({
    card_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cards',
        key: 'id'
      },
    },
    deck_id: {
    type: DataTypes.INTEGER,
      references: {
        model: 'Decks',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'card_deck',
  });
  return card_deck;
};
