"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//This file contains 3 parameters
//1 The port for the app to listen on
//2 The connection string for the database
//3 The size limit for the json passed in
exports.default = {
    "port": 3005,
    "mongoUrl": 'mongodb://localhost:27017/mongo',
    "bodyLimit": '100kb'
};
//# sourceMappingURL=index.js.map