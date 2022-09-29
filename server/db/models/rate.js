const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Project, { foreignKey: 'project_id' });
    }
  }
  Rate.init({
    rate: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Rate',
  });
  return Rate;
};
