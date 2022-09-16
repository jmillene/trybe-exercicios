const express = require('express');
const booksRouter = require('./router/bookRouter')
const PORT = process.env.PORT || 3004;
const app = express();
app.use(express.json());
app.get('/', (_request, response) => {
  response.send();
});
app.use('/books', booksRouter);
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
