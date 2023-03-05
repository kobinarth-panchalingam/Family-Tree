const mysql = require("mysql");

//create connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
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
