const { Book }  = require('../models')

const getAll = async () =>{
  const book = await Book.findAll();
  return book;
}
const getById = async (id) =>{
  const bookId = await Book.findByPk(id)
  return bookId;
}
const create = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
};
const update = async(id, author) =>{
  const bookUpdate = await Book.update({title, author, pageQuantity})
  return bookUpdate;
}
module.exports = {
  getAll,
  getById,
  create,
  update,
}