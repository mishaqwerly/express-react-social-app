const db = require("../services/db");
const jwt_decode = require('jwt-decode')

function checkAuthorized(tableName, cellName){
  return async function (req, res, next){
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.status(400).send('Access denied. You are not authorized')
    }
    const decoded = jwt_decode(token);
    const userId = decoded.userId;
    const isAuthor = await db.select().from(tableName).where(cellName, userId).first();
    console.log(isAuthor)
    if (isAuthor) {
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
