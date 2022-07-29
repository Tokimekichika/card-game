const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
      // Ability.belongsTo(Card, { foreignKey: 'ability_id' });
    }
  }
  Ability.init({
    description: {
      type: DataTypes.TEXT,
    },
    effect: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Ability',
  });
  return Ability;
};
