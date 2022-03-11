var express = require('express')

const log4js = require("log4js");
log4js.configure({
  appenders: { logs: { type: "file", filename: "logs.log" } },
  categories: { default: { appenders: ["logs"], level: "info" } }
});

const logger = log4js.getLogger("logs");



var app = express()
logger.info("Server Started");
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
 res.send('hello world')


 

 logger.info("Server response sent");

})


// list to a particular port
app.listen(3000)

