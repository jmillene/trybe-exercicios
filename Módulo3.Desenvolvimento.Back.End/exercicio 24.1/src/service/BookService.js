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
const update = async(id,{ title, author, pageQuantity }) =>{
  const [ bookUpdate ] = await Book.update({ 
    title, 
    author, 
    pageQuantity, 
  }, 
  { where: { id } },
  )
  return bookUpdate;
}
const remove = async (id) => {
  const removeBook = await Book.destroy({ where: { id } },)
  return removeBook;
}
const getByAuthor = async()=>{
  const authorBusca = await Book.findAll({author});
  return authorBusca;
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
}