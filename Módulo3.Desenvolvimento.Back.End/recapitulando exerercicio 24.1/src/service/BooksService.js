const { Book }  = require('../models/')

const getAll = async () => {
  const book = await Book.findAll();
  return book;

}
const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;

}
const create = async ({title, author, pageQuantity}) => {
const book = await Book.create({title, author, pageQuantity})
return book;
}

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
const remove = async(id) =>{
  const book = await Book.destroy(
    { where: { id } },)
  return book;
}
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}