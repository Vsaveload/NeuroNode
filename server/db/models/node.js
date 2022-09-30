const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Node extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Project, { foreignKey: 'project_id' });
      this.hasMany(models.Connection, { foreignKey: 'from' });
    }
  }
  Node.init({
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    project_id: DataTypes.INTEGER,
    isFirst: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Node',
  });
  return Node;
};
