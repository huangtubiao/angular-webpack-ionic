'use strict';

var sessionsController = require('./sessions.controller.js');

module.exports = angular.module('app.sessions', [])
.controller( 'SessionsController', ['$scope', sessionsController ]);