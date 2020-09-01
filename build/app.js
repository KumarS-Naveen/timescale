"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dbconnector_1 = __importDefault(require("./dbconnector"));
// Create a new express application instance
var app = express();
dbconnector_1.default.init();
app.listen(4567, function () {
    console.log('Example app listening on port 3001!');
});
//# sourceMappingURL=app.js.map