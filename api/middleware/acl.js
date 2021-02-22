const db = require("../services/db");
const jwt_decode = require('jwt-decode')

function checkAuthorized(tableName, cellName){
  return async function (req, res, next){
    const userId = req.user._statements[1].value;
    const item = await db.select().from(tableName).where('id', req.params.id).first();
    if (item && item[cellName] === userId) {
      console.log("you heve permissions")
      next();
    } else {
      res.status(401).send("Access denied. You don't have permissions")
    }
  }
}

module.exports = {
  checkAuthorized,
};
