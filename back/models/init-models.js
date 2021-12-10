var DataTypes = require("sequelize").DataTypes;
var _border = require("./border");
var _reply = require("./reply");
var _user = require("./user");

function initModels(sequelize) {
  var border = _border(sequelize, DataTypes);
  var reply = _reply(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    border,
    reply,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
