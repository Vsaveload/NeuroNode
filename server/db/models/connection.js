const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Connection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Node, { foreignKey: 'from' });
      this.hasMany(models.Statistic, { foreignKey: 'connection_id' });
    }
  }
  Connection.init({
    from: DataTypes.INTEGER,
    to: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Connection',
  });
  return Connection;
};
