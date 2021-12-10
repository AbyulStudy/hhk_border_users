const { border, users } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = (req, res) => {
  console.log("./controllers/borer/write.js");
  const accessTokenData = isAuthorized(req);

  // 잘못된 accessToken을 받았을 경우
  if (!accessTokenData) {
    return res.status(401).send({ message: "not authorized" });
  }

  // 정상적인 데이터를 받지 못한 경우 (필수 데이터가 없는 경우)
  if(!req.body.subject || !req.body.category || !req.body.content){
    return res.status(401).send({ message: "lack of data" })
  }
  
  // 정상적인 데이터를 받지 못한 경우 (불필요한 데이터를 받은 경우)
  const validKeys = ['subject', 'category', 'content'];
  for(let key in req.body) {
    if(!validKeys.includes(key)) {
      return res.status(401).send({message:"too many data"})
    }
  }

  const { user_idx, name } = accessTokenData;
  const { subject, category, content } = req.body;

  border
  .create({
    user_idx: user_idx,
    writer_name: name,
    subject,
    category,
    content,
  })
  .then(border => {
    res.json({border});
  })
  .catch(err => {
    console.error(err);
  })

};

