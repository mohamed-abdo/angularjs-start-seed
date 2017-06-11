(function () {
    'use strict';
    var userService = function (tokenService) {
        return {
            userInfo: function (token) { },
            userName: function (token) { }
        };
    };
    app.auth.factory('userService', userService);
})();