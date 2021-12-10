const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunction");

module.exports = (req, res) => {
  console.log("./controllers/users/login.js");
  const { email, password } = req.body;
  console.log("email : ", email);
  console.log("password : ", password);

  user
    .findOne({
      where: {
        email,
        password,
      },
    })
    .then((data) => {
      // if not userInfo 404 Fail err
      if (!data) {
        // 오류 발생시 기존 로그인 페이지로 리다이렉트 합니다.
        let backURL=req.header('Referer') || '/';
        res.redirect(backURL);
        return ;//res.status(404).send("invalid user");
      }

      // result data - delete password
      delete data.dataValues.password;
      // sign - AccessToken
      const accessToken = generateAccessToken(data.dataValues);
      console.log("accessToken : ", accessToken);
      // send - AccessToken
      sendAccessToken(200, res, accessToken);
    })
    .catch((err) => {
      console.error(err);
      // res.json(err);
      // 오류 발생시 sequelize 에러를 돌려주는 것은 부적절해 보입니다.
      // 기존 로그인 페이지로 리다이렉트 합니다.
      let backURL=req.header('Referer') || '/';
      res.redirect('https://exxocism.github.io/simpleboard-test/login.html');
    });
};
