'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _gym = require('../model/gym');

var _gym2 = _interopRequireDefault(_gym);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
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
        _gym2.default.find({ type: 'times' }, function (err, gym) {
            if (err) {
                res.send(err);
            }

            var jsonString = gym;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 7; i++) {
                message += json[0]['gymtimes'][i] + '\n';
            }

            res.send('Gym Times \n' + message);
        });
    });

    api.get('/join', function (req, res) {
        _gym2.default.find({ type: 'join' }, function (err, gym) {
            if (err) {
                res.send(err);
            }

            var jsonString = gym;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 1; i++) {
                message += json[0]['joininfo'][i] + '\n';
            }
            res.send(message);
        });
    });
    return api;
};
//# sourceMappingURL=gym.js.map