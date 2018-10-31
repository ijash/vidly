const winston = require('winston')
module.exports = function(err,req,res,next){
  //log exception
  winston.error(err.message,err);
  res.status(500).send('status code 500: something failed.')
}