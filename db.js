// dbConfig.js
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "sql8.freesqldatabase.com",
  user: "sql8722461",
  password: "ENrqkh8PU6",
  database: "sql8722461",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database as ID", connection.threadId);
});

module.exports = connection;
