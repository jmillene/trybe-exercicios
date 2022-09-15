const express = require('express');

const books = require('../controller/BooksController')
const router = express.Router();
router.get('/', books.books);
router.get('/:id', books.booksId );
router.post('/', books.create);

module.exports = router