'use strict';
var app = app || {};
app.auth = angular.module('auth', [
                                       'ui.router',
                                       'ui.bootstrap',
                                       'cgBusy',
                                       'ngAnimate',
                                       'ngStorage',
                                       'toaster'
]);

(function () {
    console.log('Application initialization!');
})();