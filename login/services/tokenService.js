(function () {
    'use strict';
    var tokenService = function ($localStorage) {

        this.isAuthenticated = function () { return $localStorage.token ? true : false; },
        this.access_token = function () { return $localStorage.token ? $localStorage.token.access_token : null; },
        this.client_token = function () { return $localStorage.token ? $localStorage.token.clientToken : null; },
        this.refresh_token = function () { return null; },
        this.saveToken = function (token) { $localStorage.token = token; },
        this.clearToken = function () { $localStorage.token = null; }
    };
    app.auth.service('tokenService', tokenService);
})();