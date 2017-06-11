'use strict';
var app = app || {};
app.angularStartKit = angular.module('angularStartKit', [
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