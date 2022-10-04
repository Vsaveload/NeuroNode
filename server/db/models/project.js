const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, { foreignKey: 'category_id', onDelete: 'CASCADE' });
      this.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
      this.hasMany(models.Node, { foreignKey: 'project_id', onDelete: 'CASCADE' });
      this.hasMany(models.Statistic, { foreignKey: 'project_id', onDelete: 'CASCADE' });
      this.hasMany(models.Rate, { foreignKey: 'project_id', onDelete: 'CASCADE' });
    }
  }
  Project.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};
