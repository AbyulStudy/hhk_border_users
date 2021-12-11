const {user} = require('../../models');
const {
  generateAccessToken,
  sendAccessToken
} = require('../tokenFunction')

module.exports = async (req, res) => {
  console.log('./controllers/users/signup.js');

  //validation check
  const front_arguments = [ 'email', 'user-name', 'password' ];
  // 0 : 아이디 중복
  // 1 : 메일주소 중복
  // 2 : 메일주소 형식 문제
  // 3 : 값이 없음, value = 값  
  for( const args of front_arguments ) {
    if( !req.body.hasOwnProperty(args) ) {
      //redirect
      let backURL=req.header('Referer') || '/';
      if( backURL.includes('github.io') ) backURL += 'simpleboard-test/';
      backURL += `signup.html?error=3&value=${args}`;
      return res.redirect(backURL);
    }
  }

  //validate email address

  //check if an username already exists
  const existsCheck = await user.findOne({ where : { name : req.body['user-name'] } });
  if( existsCheck ) {
    let backURL=req.header('Referer') || '/';
    if( backURL.includes('github.io') ) backURL += 'simpleboard-test/';
    backURL += `signup.html?error=0`;
    return res.redirect(backURL);
  }

  //create user credentials
  user.findOrCreate({
    where:{ email: req.body.email },
    defaults: {
      email: req.body.email,
      name: req.body['user-name'],
      password: req.body.password
    }
  })
  .then(user => {
    const [userInfo, checked] = user;
    if(!checked){
      let backURL=req.header('Referer') || '/';
      if( backURL.includes('github.io') ) backURL += 'simpleboard-test/';
      backURL += `signup.html?error=1`;
      return res.redirect(backURL);
    }
    delete userInfo.dataValues.password;
    const accessToken = generateAccessToken(userInfo.dataValues);
    sendAccessToken(req, res, accessToken);
  })
};
