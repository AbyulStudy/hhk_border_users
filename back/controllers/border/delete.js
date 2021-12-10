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
  if(!req.params.border_idx){
    return res.status(401).send({ message: "lack of data" })
  }
  const { user_idx } = accessTokenData;
  const { border_idx } = req.params;
  border
  .destroy({
    where:{user_idx,border_idx}
  })
  .then(destoryed => {
    if(!destoryed){
      return res.status(404).json({message : 'destory fail'})
    }
    res.json({message:'destory success'})
  })
};

