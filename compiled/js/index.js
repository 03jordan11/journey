"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/../index.html');
});
var path = require('path');
app.use('/src', express_1.default.static(path.join(__dirname, '../../src')));
app.use('/public', express_1.default.static(path.join(__dirname, '../../compiled')));
app.listen(3000, function () {
    console.log('The application is listening on port 3000!');
});
