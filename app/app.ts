import express = require('express');
import knex from "knex"
import db from './dbconnector';




// Create a new express application instance
db.init();
const app: express.Application = express();
app.get("/insert",  (req: any, res: any) => {
   db.insert();
  res.statusCode = 200;
  res.json("success");
});


app.listen(3000, function () {
  console.log('Example app listening on port '+ 3000);
});


