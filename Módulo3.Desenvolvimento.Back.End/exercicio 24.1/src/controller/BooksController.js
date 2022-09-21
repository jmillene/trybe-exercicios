const service = require('../service/BookService')

const books = async (req, res) => {
  const {author} = req.query;
  let books;
  if(author){
    books = await service.getByAuthor();
  }
 
  else{
    books = await service.getAll();
  }
  return res.status(200).json(books);
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
const update = async(req, res) =>{
  const {id} = req.params;
  const {title, author, pageQuantity} = req.body
  const updates = await service.update(id,{title, author, pageQuantity})
  if(!updates){
    return res.status(404).json({ message: 'Book not found' })
  }
  return res.status(201).json({ message: 'Book updated' })
}
const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await service.remove(id);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
}
module.exports = {
  books,
  booksId,
  create,
  update,
  remove,
}