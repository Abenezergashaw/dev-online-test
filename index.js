// server.js
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const app = express();
const path = require("path");
const port = 3000;

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// Serve your HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Handle odd saving
app.post("/submit", (req, res) => {
  console.log(req.body);
  const {
    gameid,
    runners,
    win1,
    place1,
    win2,
    place2,
    win3,
    place3,
    win4,
    place4,
    win5,
    place5,
    win6,
    place6,
    win7,
    place7,
    win8,
    place8,
    name1,
    name2,
    name3,
    name4,
    name5,
    name6,
    name7,
    name8,
  } = req.body;
  const query =
    "INSERT INTO odds (game,runners,w1,p1,w2,p2,w3,p3,w4,p4,w5,p5,w6,p6,w7,p7,w8,p8,name1,name2,name3,name4,name5,name6,name7,name8) VALUES (?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    query,
    [
      gameid,
      runners,
      win1,
      place1,
      win2,
      place2,
      win3,
      place3,
      win4,
      place4,
      win5,
      place5,
      win6,
      place6,
      win7,
      place7,
      win8,
      place8,
      name1,
      name2,
      name3,
      name4,
      name5,
      name6,
      name7,
      name8,
    ],
    (error, results) => {
      if (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data");
      } else {
        console.log("Data inserted successfully:", results);
        res.send("Data inserted successfully");
      }
    }
  );
});

// save ticket data api
app.post("/save-ticket-data", (req, res) => {
  const data = req.body;

  const sql =
    "INSERT INTO ticket (username,userid,gameid,ticketid,type,name,number,odd,stake,amount,winstatus,paidstatus,payerid,gametype) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      "aben",
      1,
      data.gameID,
      data.ticketID,
      data.betType,
      data.contestantName,
      data.contestantNumber,
      data.contestantOdd,
      data.stake,
      0,
      0,
      0,
      0,
      0,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).send("Database error");
      }
      res.send("1");
    }
  );
});

// Fetch data
app.get("/data", (req, res) => {
  const query = "SELECT * FROM odds where game BETWEEN 2049 AND 2054";

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Error fetching data");
    } else {
      res.json(results);
    }
  });
});

// Fetch balance
app.get("/get-balance", (req, res) => {
  let stake = 0;
  let winAmount = 0;
  let cancelAmount = 0;
  db.query(
    'SELECT stake FROM ticket WHERE date = "2024-08-02"',
    (err, stakeData) => {
      if (err) {
        return console.error("error running query1: " + err.stack);
      }
      // sum += parseInt(stakeData.stake);
      stakeData.forEach((data) => {
        stake += parseFloat(data.stake);
      });
      db.query(
        'SELECT amount FROM ticket WHERE date= "2024-08-02" AND paidstatus="1"',
        (err, wimAmountData) => {
          if (err) {
            return console.error("error running query1: " + err.stack);
          }
          // sum += parseFloat(wimAmountData.stake);
          wimAmountData.forEach((data) => {
            winAmount += parseFloat(data.amount);
          });
          db.query(
            'SELECT stake FROM ticket WHERE date= "2024-08-02" AND cancelstatus="1"',
            (err, canceAmountData) => {
              if (err) {
                return console.error("error running query1: " + err.stack);
              }
              // sum += parseFloat(canceAmountData.stake);
              canceAmountData.forEach((data) => {
                cancelAmount += parseFloat(data.stake);
              });
              console.log(stake, winAmount, cancelAmount);
              console.log("data", stake - winAmount - cancelAmount);
              res.json(stake - winAmount - cancelAmount);
            }
          );
        }
      );
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
