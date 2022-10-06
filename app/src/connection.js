const mysql = require('mysql');

const con = mysql.createConnection({
  host: "db",
  user: "giodou",
  port: '3306',
  password: "123456",
  database: "desafio-node"
});

module.exports = con