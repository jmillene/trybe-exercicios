'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { await queryInterface.bulkInsert ( 'Books',
  [{
    title: '11 minutos',
    author: 'Paulo Coelho',
    pageQuantity: 279,
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
  }],
  )
},
down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
