const mysql = require("mysql");
const fs = require("fs");

//create connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  ssl: {
    ca: fs.readFileSync("C:/Users/kobin/OneDrive/Desktop/Family-Tree/server/config/DigiCertGlobalRootCA.crt.pem"),
  },
});

//connect
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected successfully!!!!!");
  }
});

module.exports = db;
