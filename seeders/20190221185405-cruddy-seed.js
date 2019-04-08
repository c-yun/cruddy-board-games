'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('games', [{
      name: "TicTacTow",
      description: "Awesome strategy game",
      players: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Rock, Paper, Scissors",
      description: "Riveting multiplayer action!",
      players: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Yahtzee",
      description: "Amazing dice rolling game",
      players: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  }, 

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('games', null, {});
  }
};
