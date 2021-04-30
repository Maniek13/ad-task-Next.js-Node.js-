'use strict';

const controller = require('./controller')

module.exports = function(app) {
  app.get('/add', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.writeHead(200, {'Content-Type': 'application/json'});
      let data = controller.parametrs(req);
      controller.add(data.name, data.description, data.date).then(results => {
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
      controller.select().then(results => {
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

}


  