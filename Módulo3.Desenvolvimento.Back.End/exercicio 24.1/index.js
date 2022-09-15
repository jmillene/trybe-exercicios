const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));