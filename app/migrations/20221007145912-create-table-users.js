'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING(80),
          allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      }
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
