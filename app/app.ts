import express = require('express');
import knex from "knex"
import db from './dbconnector';




// Create a new express application instance
const app: express.Application = express();
db.init();

app.listen(4567, function () {
  console.log('Example app listening on port 3001!');
});


