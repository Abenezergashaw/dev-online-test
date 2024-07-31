// dbConfig.js
const mysql = require("mysql");

const connection = mysql.createConnection({
  // host: "sql8.freesqldatabase.com",
  // user: "sql8722461",
  // password: "ENrqkh8PU6",
  // database: "sql8722461",
  host: "mysql-abenezer.alwaysdata.net",
  user: "abenezer",
  password: "ab230591gas",
  database: "abenezer_23",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database as ID", connection.threadId);
  console.log("Connected to the database as ID", connection.host);
});

module.exports = connection;
