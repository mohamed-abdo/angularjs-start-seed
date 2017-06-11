(function () {
    'use strict';
    var authEventsHandlerCtrl = function ($scope, $rootScope, $window, $stateParams, tokenService, $timeout, $log, toaster, AUTH_EVENTS) {
        //#region scope


        $rootScope.$on(AUTH_EVENTS.logoutSuccess, function (scope, email) {
            tokenService.cleanToken();
            $log.log(AUTH_EVENTS.logoutSuccess);
            $timeout(function () {
                $window.location.reload();
            }, 10);
        });

        $rootScope.$on(AUTH_EVENTS.logoutFailed, function (scope, email) {
            $log.log(AUTH_EVENTS.logoutFailed);
        });

        $rootScope.$on(AUTH_EVENTS.sessionTimeout, function (scope, email) {
            goToLoginPage();
            $log.log(AUTH_EVENTS.sessionTimeout);
        });

        $rootScope.$on(AUTH_EVENTS.notAuthenticated, function (scope, email) {
            goToLoginPage();
            $log.log(AUTH_EVENTS.notAuthenticated);
        });
        $rootScope.$on(AUTH_EVENTS.notConnected, function (scope, email) {
            goToLoginPage();
            $log.log(AUTH_EVENTS.notConnected);
        });

        var goToLoginPage = function () {
            var $state = $injector.get('$state');
            $state.go("login");
        };
        //#endregion

    };
    app.angularStartKit.controller('authEventsHandlerCtrl', authEventsHandlerCtrl);
})();