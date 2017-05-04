var express = require("express");
var requestIp = require("request-ip");

var app = express();
var port = process.env.PORT || process.argv[2] || 8080;

app.use(requestIp.mw());

app.get("/", function(req, res) {
  res.json({
    ipaddress: req.clientIp,
    language: req.header('accept-language').split(";")[0].split(",")[0],
    software: req.header('user-agent').split("(")[1].split(")")[0],
  });
});

app.listen(port);