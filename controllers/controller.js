'use strict';

var response = require('./res');
var connection = require('./db_con');

exports.users = function(req, res) {
    connection.query('SELECT * FROM person', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};