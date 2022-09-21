const service = require("../service/BooksService");
const books = async (req, res) => {
  try {
    const book = await service.getAll();
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Deu ruim')
  }
};
const booksId = async (req, res) =>{
  const { id } = req.params
  const book = await service.getById(id);
  if(!book){
    res.status(404).json({ "message": "Book not found" })
  }
  res.status(200).json(book);
}
const create = async (req,res)=>{
  const {title, author, pageQuantity} = req.body;
  const book = await service.create({title, author, pageQuantity})
  return res.status(200).json(book)
}
const update = async(req, res) =>{
  const {id} = req.params;
  const {title, author, pageQuantity} = req.body
  try {

    const updates = await service.update(id,{title, author, pageQuantity})
    if(!updates){
      return res.status(404).json({ message: 'Book not found' })
    }
    return res.status(201).json({ message: 'Book updated' })
  } catch (error) {
    console.log(error);
    return res.status(500).json("Deu ruim")
  }
 
}

module.exports = {
  books,
  booksId,
  create,
  update,
};
