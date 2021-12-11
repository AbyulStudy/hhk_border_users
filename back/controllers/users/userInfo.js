const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunction');

module.exports = (req, res) => {

  //토큰의 정보를 확인 후 전송
  if( !req.cookies || !req.cookies['hhkToken'] ) {
    return res.status(401).send("No credentials provided");
  }

  const user_info = isAuthorized( req )
  if( !user_info ) return res.status(401).send("No credentials provided");

  return res.status(200).json(user_info);
};
