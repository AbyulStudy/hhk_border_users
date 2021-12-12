const { border, users } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = (req, res) => {
  console.log("./controllers/borer/modify.js");
  const accessTokenData = isAuthorized(req);
  // 잘못된 accessToken을 받았을 경우
  if (!accessTokenData) {
    return res.status(401).send({ message: "not authorized" });
  }
  
  // 정상적인 데이터를 받지 못한 경우 (필수 데이터가 없는 경우)
  if(!req.params['border_idx'] || !req.body['subject'] || !req.body['category'] || !req.body['content']){
    return res.status(401).send({ message: "lack of data" })
  }
  
  // 정상적인 데이터를 받지 못한 경우 (불필요한 데이터를 받은 경우)
  const validKeys = ['user_idx','subject', 'category', 'content'];
  for(let key in req.body) {
    if(!validKeys.includes(key)) {
      return res.status(401).send({message:"too many data"})
    }
  }
  const { border_idx } = req.params;
  const { user_idx } = accessTokenData;
  const { subject, category, content } = req.body;
  border
    .update(
      {
        subject,
        category,
        content
      },
      {
        where:{border_idx , user_idx}
      }
    )
    .then(update => {
      if(!update[0]){
        return res.status(401).send({ message: "border not authorized" })
      }
      res.json({message : 'border modify - ok'})
    })



};

