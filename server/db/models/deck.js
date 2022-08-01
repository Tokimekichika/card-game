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
    static associate({ User }) {
      // Many to many deck -> card
      Deck.belongsTo(User,{foreignKey:'user_id'})
      // define association here
    }
  }
  Deck.init({
    name:DataTypes.TEXT,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },

  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};
