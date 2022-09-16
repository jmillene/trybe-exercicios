const express = require('express');

const books = require('../controller/BooksController')
const router = express.Router();
router.get('/', books.books);
router.get('/:id', books.booksId );
router.post('/', books.create);
router.put('/:id', books.update);
router.delete('/:id', books.remove);

module.exports = router