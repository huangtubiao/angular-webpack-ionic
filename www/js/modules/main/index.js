'use strict';

var mainController = require('./main.controller.js');

module.exports = angular.module('app.main', [
])
.controller( 'MainController', ['$scope', mainController ]);