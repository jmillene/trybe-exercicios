const model = require('../model/user.model');

const getAll = async() =>{
  const user = await model.findAll()
  return user;
}
module.exports ={
  getAll,
}