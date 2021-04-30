const express = require('express');
const app = express();

const routes = require('./api/routes')
const port = process.env.PORT || 8000;

routes(app);

app.listen(port, function() {
  console.log('Server started on port: ' + port);
});
