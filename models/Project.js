const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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
      allowNull: false 
    },
    description: {
      type: DataTypes.STRING 
    },
    needed_funding: {
      type: DataTypes.FLOAT, 
      allowNull: false 
    },
    pledged: {
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    currency: { type: DataTypes.STRING 
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    state_changed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    launched_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    backers_count: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    deadline_month: {
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    deadline_day: {
      type: DataTypes.INTEGER,
      allowNull: true 
    },
    deadline_hr: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    state_changed_at_yr: {
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    state_changed_at_hr: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    created_at_month: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    created_at_day: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
      },
    created_at_yr: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
      },
    created_at_hr: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    launched_at_month: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    launched_at_day: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    launched_at_yr: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    launched_at_hr: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    create_to_launch: { 
      type: DataTypes.STRING, 
      allowNull: true 
    },
    create_to_launch: { 
      type: DataTypes.STRING, 
      allowNull: true 
    },
    launch_to_deadline: { 
      type: DataTypes.STRING, 
      allowNull: true 
    },
    create_to_launch_days: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    launch_to_deadline_days: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: "project",
  }
);

module.exports = Project;



        

