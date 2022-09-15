const express = require('express');

const books = require('../controller/BooksController')
const router = express.Router();
router.get('/books', books.books);