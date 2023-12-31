require("dotenv").config()
var jwt = require('jsonwebtoken');


const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.send("please login")
    }
    jwt.verify(token, "mysecret", function(err, decoded) {
        const {userID} = decoded
        req.userID = userID
        if(decoded){
            next()
        }
        else{
            res.send("Please login")
        }
      });   
}

module.exports = {authenticate}