var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "$abniFamily1",
  database: "banten_db"
});

con.connect(function (err){
    if(err) throw err;
    console.log("Connected to DB!")
});

module.exports = con;