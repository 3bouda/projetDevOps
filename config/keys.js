
const dotenv = require("dotenv");
dotenv.config();
//mongodb://localhost:27017/test
mongodb://mongodb:27017/SkanderPFE
module.exports = {
  //dbUrl: `mongodb://${process.env.MONGODB_HOSTNAME}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
 // port: process.env.PORT || 3000,

 
  dbUrl: process.env.MONGO_URI,
  port: process.env.PORT,
 
  
  /*avant
  username: process.env.MONGODB_USERNAME,
  password: process.env.MONGODB_PASSWORD,
  dbHost: process.env.MONGODB_HOSTNAME,
  mongoport: process.env.MONGODB_PORT,
  database: process.env.MONGODB_DATABASE,
  */
  
};