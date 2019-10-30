var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: "$abniFamily1", in ubuntu
  password : "",
  database: "media_dev"
});

con.connect(function (err){
    if(err) throw err;
    console.log("Connected to DB!")
});

module.exports = con;