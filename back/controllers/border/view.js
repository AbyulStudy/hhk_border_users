const { border } = require("../../models");

module.exports = (req, res) => {
  console.log("./controllers/border/view.js");
  try{
    const {border_idx} = req.query;
    border
    .findOne({
      where:{
        border_idx
      }
    })
    .then(border => {
      res.json(border);
    })
  } catch(err) {
    console.error(err);
  }
};
