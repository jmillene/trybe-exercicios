const connection = require('./connection');

const findAll = async () =>{
  const users = await connection.execute('SELECT * FROM TypeScriptExpress.Users');
  return users;
}

module.exports ={
  findAll,
}