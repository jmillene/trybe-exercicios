// src/app.js
const booksRouter = require('./router/BooksRouter')
const express = require('express');

const app = express();
app.use(express.json());
app.use('/books', booksRouter);
module.exports = app;