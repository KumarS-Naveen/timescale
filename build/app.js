"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dbconnector_1 = __importDefault(require("./dbconnector"));
// Create a new express application instance
dbconnector_1.default.init();
var app = express();
app.get("/insert", function (req, res) {
    dbconnector_1.default.insert();
    res.statusCode = 200;
    res.json("success");
});
app.listen(8080, function () {
    console.log('Example app listening on port ' + process.env.PORT);
});
//# sourceMappingURL=app.js.map