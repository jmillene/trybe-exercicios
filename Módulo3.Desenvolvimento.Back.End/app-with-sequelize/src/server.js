// src/server.js

require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});