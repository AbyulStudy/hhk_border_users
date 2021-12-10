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
        return res.status(404).send("invalid user");
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
      res.json(err);
    });
};
