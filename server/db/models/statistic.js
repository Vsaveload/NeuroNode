const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Project, { foreignKey: 'project_id' });
      this.belongsTo(models.Connection, { foreignKey: 'connection_id' });
    }
  }
  Statistic.init({
    project_id: DataTypes.INTEGER,
    connection_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Statistic',
  });
  return Statistic;
};
