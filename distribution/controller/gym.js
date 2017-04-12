'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _gym = require('../model/gym');

var _gym2 = _interopRequireDefault(_gym);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    api.get('/classes/:pickedDay', function (req, res) {

        var dayPicked = req.params.pickedDay;

        _gym2.default.find({ day: dayPicked }, function (err, gym) {
            if (err) {
                res.send(err);
            }

            var jsonString = gym;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 4; i++) {
                message += json[0]['class'][i] + '\n';
            }

            res.send(json[0]['day'] + ' classes are:\n' + message);
        });
    });

    api.get('/equipment', function (req, res) {

        _gym2.default.find({ type: 'equipment' }, function (err, gym) {
            if (err) {
                res.send(err);
            }

            var jsonString = gym;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 4; i++) {
                message += json[0]['gymequipment'][i] + '\n';
            }

            res.send('Gym equipment includes \n' + message);
        });
    });
    api.get('/facilities', function (req, res) {

        _gym2.default.find({ type: 'facilities' }, function (err, gym) {
            if (err) {
                res.send(err);
            }

            var jsonString = gym;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 4; i++) {
                message += json[0]['gymfacilities'][i] + '\n';
            }

            res.send('Gym facilities includes \n' + message);
        });
    });

    api.get('/openingtimes', function (req, res) {
        res.send('- Gym Open Hours -\nMondays 8am-7:30pm\nTuesdays 8am-7.30pm\nWednesdays 8am-7:30pm\nThursdays 8am-7:30pm\nFridays 8am-7:30pm\nSaturdays 10am - 2pm\nSundays Closed');
    });

    return api;
};
//# sourceMappingURL=gym.js.map