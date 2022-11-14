const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    needed_funding: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    pledged: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    currency: {
      type: DataTypes.STRING,
    },
    deadline: {
      type:DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    state_changed_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    launched_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    backers_count: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    deadline_month: {

    },
    deadline_day: {

    },
    deadline_hr: {

    },
    state_changed_at_yr: {

    },
    state_changed_at_hr: {

    },
    created_at_month: {

    },
    created_at_day: {

    },
    created_at_yr: {

    },
    created_at_hr: {

    },
    launched_at_month: {

    },
    launched_at_day: {

    },
    launched_at_yr: {

    },
    launched_at_hr: {

    },
    create_to_launch: {

    },
    launch_to_deadline: {

    },
    create_to_launch_days: {

    },
    launch_to_deadline_days: {

    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;
