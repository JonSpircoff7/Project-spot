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
      allowNull: false 
    },
    currency: { type: DataTypes.STRING 
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    state_changed_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_created: {
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
      allowNull: false 
    },
    deadline_month: {
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    deadline_day: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    deadline_hr: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    state_changed_at_yr: {
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    state_changed_at_hr: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    created_at_month: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    created_at_day: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
      },
    created_at_yr: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
      },
    created_at_hr: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    launched_at_month: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    launched_at_day: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    launched_at_yr: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    launched_at_hr: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    create_to_launch: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    create_to_launch: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    launch_to_deadline: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    create_to_launch_days: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    launch_to_deadline_days: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: "project",
  }
);

module.exports = Project;



        

