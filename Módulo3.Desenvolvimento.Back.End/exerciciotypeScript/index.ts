import express from 'express';
const {users} = require('./src/router')
const app = express();
app.use(express.json());
app.use('/users', users)
const PORT = 3001;

app.listen(PORT,()=>{
  console.log(`Ativo na porta ${PORT
  }`);
  
})
