const service = require('../service/BookService')

const books = async (req, res) => {
  try {
    const book = await service.getAll();
  return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error.message)
  }
  
};
const booksId = async(req, res) =>{
  const {id} = req.params
  const bookId = await service.getById(id);
  if(!bookId){
    return res.status(404).json({"message": "Book not found"})
  }
  return res.status(200).json(bookId);
}
const create = async(req, res) =>{
const { title, author, pageQuantity } = req.body
const createService = await service.create({ title, author, pageQuantity } );
return res.status(201).json(createService)
}
module.exports = {
  books,
  booksId,
  create,
}