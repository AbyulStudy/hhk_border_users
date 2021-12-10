const { border } = require("../../models");

module.exports = (req, res) => {
  console.log("./controllers/border/list.js");
  border
  .findAll()
  .then(borders => {
    const borderList = borders.length;
    for(let i = 0; i < borderList; i++){
      delete borders[i].dataValues.writer_email
      delete borders[i].dataValues.content
      delete borders[i].dataValues.created_date
    }
    res.json(borders);
  })
};
