const service = require('../service/BookService')

const books = async (req, res) => {
  const book = await service.getAll();
  return res.status(200).json(book);
};

module.exports = {
  books,
}