'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//data model going to be used
var Schema = _mongoose2.default.Schema;

var gymSchema = new Schema({
    name: String,
    classes: String
});

exports.default = gymSchema;


module.exports = _mongoose2.default.model('Gym', gymSchema);
//# sourceMappingURL=gym.js.map