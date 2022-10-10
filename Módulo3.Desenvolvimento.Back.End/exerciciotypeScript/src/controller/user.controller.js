const service = require('../service/user.service')

const users = async(req, res) =>{
  const user = await service.getAll();
  return res.status(200).json(user)

}
module.exports={
  users,
}