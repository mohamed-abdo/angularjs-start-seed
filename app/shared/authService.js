(function () {
    'use strict';
    var authService = function ($rootScope, tokenService, $log, $timeout, toaster, AUTH_EVENTS) {

        this.isAuthenticated = function () { return tokenService.isAuthenticated(); }
        this.userInitialize = function () {
            if (this.isAuthenticated) {
                $log.log(AUTH_EVENTS.loginSuccess);
                toaster.success('', 'login succeed!');
            } else {
                $log.log(AUTH_EVENTS.loginFailed);
                toaster.info('', 'anonymous user login!');
            }
            //temporary 
            $timeout(function () {
                tokenService.clearToken();
            }, 5000);
        }
    };
    app.angularStartKit.service('authService', authService);
})();