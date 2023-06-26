const express = require("express");
require('dotenv').config()
const app = express();

app.get("/",(req, res) => {
    res.send({"msg":"base api point"})
})

app.get("/blog",(req, res) => {
    res.send({"msg":"blog api point"})
})

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
