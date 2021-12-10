const {user} = require('../../models');
const {
  generateAccessToken,
  sendAccessToken
} = require('../tokenFunction')

module.exports = (req, res) => {
  console.log('./controllers/users/signup.js');
  const {email,name,password} = req.body
  if(!email || !password) {
    return res.status(422).send('insufficient parameters supplied');
  }
  user.findOrCreate({
    where:{email},
    defaults: {
      email:email,
      name:name,
      password:password
    }
  })
  .then(user => {
    const [userInfo, checked] = user;
    if(!checked){
      return res.status(409).send('email exists');
    }
    delete userInfo.dataValues.password;
    const accessToken = generateAccessToken(userInfo.dataValues);
    sendAccessToken(201,res,accessToken);
  })
};
