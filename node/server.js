var url = require('url');
var mysql = require('mysql');
const express = require('express');

const connection_parametrs = {
  host: "localhost",
  user: "root",
  password: "",
  database: "tasks"
}

function parametrs(req){
  let query = url.parse(req.url).query;
  let parametrs = {};

  if(query){
    query.split("&").forEach( function(element){
      let el = element.split("=");
      parametrs[el[0]] = el[1];
    })
  }
  return parametrs;
}

async function add(name, description, date){
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
}

async function select(){
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

const app = express();

app.get('/add', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.writeHead(200, {'Content-Type': 'application/json'});
    let data = parametrs(req);
    add(data.name, data.description, data.date).then(results => {
      if(results != ""){
        res.end(JSON.stringify("ok"));
      }
      else{
        res.end(JSON.stringify("error"));
      }
  }).catch(err => {
    console.error(err);
    res.end(JSON.stringify('error'));
  });
});

app.get('/select', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.writeHead(200, {'Content-Type': 'application/json'});
    select().then(results => {
      if(results != ""){
        res.end(JSON.stringify(results));
      }
      else{
        res.end(JSON.stringify("brak danych"));
      }
  }).catch(err => {
    console.error(err);
    res.end(JSON.stringify('error'));
  });
});


app.listen(8000);
