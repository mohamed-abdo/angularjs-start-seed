(function () {
    'use strict';
    var clientThemeService = function () {
        return {
            getClientStyle: function (authClient) {
                var style = {};
                style.appTitle = 'angularStartKit';
                style.appVersion = '1.0.0';
                style.appSubtext = 'Delivering your strategy.';
                style.appBackGround = 'images/slm/AppBackground.jpg';
                style.appLogo = 'images/slm/AppLogo.png';
                style.version = authClient.version;

                style.subTitle = authClient.subTitle;
                style.logoSrc = '/images/' + authClient.clientId + '/AppLogo.png?q=' + (Math.random().toString(36) + '00000000000000000').slice(2, 5 + 2);
                style.backGroundImg = '/images/' + authClient.clientId + '/AppBackground.jpg?q=' + (Math.random().toString(36) + '00000000000000000').slice(2, 5 + 2);
                return style;
            }
        }
    };
    app.auth.factory('clientThemeService', clientThemeService);
})();