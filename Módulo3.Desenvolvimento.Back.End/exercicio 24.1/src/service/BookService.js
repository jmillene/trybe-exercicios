const model = require('../models/books.model');

const getAll = async () =>{
  const book = await model.findAll;
  return book;
}

module.exports = {
  getAll,
}