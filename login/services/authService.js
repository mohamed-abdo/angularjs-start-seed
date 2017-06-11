/// <reference path="authService.js" />
(function () {
    'use strict';
    var authService = function ($http, $log, $rootScope, $timeout, $window, utils, tokenService, AUTH_EVENTS) {
        function goToLoginPage() {
            var $window = $injector.get('$window');
            $timeout(function () {
                $window.location.reload();
            }, 10);
        };
        function getHttpConfig(clientToken) {
            return {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + clientToken
                }
            };
        };

        return {
            login: function (username, password, clientToken, retUrl) {
                var data = {
                    username: username,
                    password: password,
                    grant_type: 'password',
                    scope: 'openid'
                };

                return $http({
                    method: 'POST',
                    url: app.appSettings.authSrv,
                    headers: getHttpConfig(clientToken).headers,
                    data: $.param(data)
                }).then(function (response) {
                    if (response.data && response.data.access_token) {
                        var displayName = utils.capitalizeFirstLetter(username);
                        tokenService.saveToken({
                            'access_token': response.data.access_token,
                            'client_token': clientToken,
                            'email': username,
                            'display_name': displayName
                        });
                        $log.log(AUTH_EVENTS.loginSuccess);
                        $timeout(function () {
                            if (retUrl == '')
                                retUrl = baseUrl;
                            $window.location.href = retUrl;
                        }, 10);
                    } else {
                        $log.log(AUTH_EVENTS.loginFailed);
                    }
                    return response.data;
                }, function (error) {
                    throw error;
                });
            },
            logout: function () {
                tokenService.clearToken();
                $log.log(AUTH_EVENTS.logoutSuccess);
                goToLoginPage();
            }
        };
    };
    app.auth.factory('authService', authService);
})();