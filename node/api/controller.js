'use strict';

var url = require('url');
var mysql = require('mysql');

const connection_parametrs = {
  host: "localhost",
  user: "root",
  password: "",
  database: "tasks"
}

var controller = {
  parametrs: function (req){
    let query = url.parse(req.url).query;
    let parametrs = {};

      if(query){
        query.split("&").forEach( function(element){
          let el = element.split("=");
          parametrs[el[0]] = el[1];
        })
      }
    return parametrs;
  },
  add: async function(name, description, date) {
    const con = mysql.createConnection(connection_parametrs);

    return new Promise((resolve, reject) => { 
      con.connect(function(err) {
        if (err) throw err;
        con.query('INSERT INTO advertisment (`name`, `description`, `date`) VALUES (' + mysql.escape(name) + ', ' + mysql.escape(description)  + ', ' + mysql.escape(date) + ')', function (err, result, fields) {
          if (err)throw err;
            resolve(result);
        });
      });
    });
  },
  select: async function(){
    const con = mysql.createConnection(connection_parametrs);

    return new Promise((resolve, reject) => { 
      con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT * FROM advertisment', function (err, result, fields) {
          if (err)throw err;
            resolve(result);
        });
      });
    });
  }
};

module.exports = controller;