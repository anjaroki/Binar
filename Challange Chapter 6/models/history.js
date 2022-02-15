"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  history.init(
    {
      user: DataTypes.STRING,
      win: DataTypes.STRING,
      lose: DataTypes.STRING,
      draw: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "history",
    }
  );
  return history;
};
