(function () {
    'use strict;'
    app.angularStartKit.constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        logoutFailed: 'auth-logout-failed',
        registrationSuccess: 'auth-registration-success',
        registrationFailed: 'auth-registration-failed',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized',
        notConnected: 'connection-not-established-to-server'
    });

    app.angularStartKit.config(['$httpProvider', '$locationProvider', function ($httpProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        // allow cors
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        //
        $httpProvider.interceptors.push('appInterceptor');
        $httpProvider.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w';
    }]);

})();