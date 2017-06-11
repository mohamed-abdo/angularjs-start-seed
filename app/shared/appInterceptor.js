(function () {
    'use strict';
    var appInterceptor = function ($rootScope, $q, authService, $log, AUTH_EVENTS) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if (authService.isAuthenticated()) {
                    config.headers.Authorization = 'Bearer ' + authService.client_token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated, response);
                    // handle the case where the user is not authenticated
                }
                return response || $q.when(response);
            },
            responseError: function (response) {
                if (response.status === 401) {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated, response);
                }
                if (response.status === 403) {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized, response);
                }
                if (response.status === 404) {
                    var $state = $injector.get("$state");
                    $state.go("404");
                }
                if (response.status === 419 || response.status === 440) {
                    $rootScope.$broadcast(AUTH_EVENTS.sessionTimeout, response);
                }
                if (response.status === 0) {
                    $rootScope.$broadcast(AUTH_EVENTS.notConnected, response);
                }
                if (response.status === 500) {
                    var $state = $injector.get("$state");
                    $state.go("error");
                }
                return $q.reject(response);
            }

        };
    };
    app.angularStartKit.factory('appInterceptor', appInterceptor);
})();