'use strict';

var response = require('./res');
var connection = require('./db_con');

exports.getAllNews = function(req, res) {
    connection.query('SELECT * FROM csvtojson', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)

            console.log(rows[0].DATE);
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};