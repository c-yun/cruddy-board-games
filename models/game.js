'use strict';
module.exports = (sequelize, DataTypes) => {
  const game = sequelize.define('game', {
    name: {
      type: DataTypes.STRING,
      // validate: {len: [8,10]}  this will only allow values with length between 8 and 10 characters
    },
    description: DataTypes.STRING,
    players: DataTypes.INTEGER
  }, {});
  game.associate = function(models) {
    // associations can be defined here
  };
  return game;
};