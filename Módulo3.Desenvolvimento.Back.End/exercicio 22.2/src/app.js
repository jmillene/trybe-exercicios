const express = require('express');
const app = express();

  app.get('/myActivities/:id',(req,res)=> {
  const listarPorId = activities.find(({id})=> id === Number(req.params.id));
  res.status(200).json(listarPorId);
   });

app.get('/activities', (req, res)=>{
  res.status(200).json({activities});
});
app.get('/myActivities',(req, res)=>
  res.status(200).json({activities}));

app.get('/filter/myActivities',(req,res)=> res.status(200).json)


  const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];


module.exports = app;