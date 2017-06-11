(function () {
    'use strict';

    var layoutCtrl = function ($scope, $rootScope, $location, $timeout, clientThemeService, tokenService, toaster, clientService) {
        $scope.loginVM = {};
        $scope.loginVM.username = "";
        $scope.loginVM.password = "";
        $scope.loginVM.isAuthenticated = tokenService.isAuthenticated();
        $scope.style = {};
        var init = function () {
            $scope.callerApp = ($location.search().clientId == undefined ? 'default' : $location.search().clientId).toLowerCase();
            $scope.authClient = clientService.getClient($scope.callerApp);
            if ($scope.authClient) {
                $scope.style = clientThemeService.getClientStyle($scope.authClient);
            }
            else {
                $scope.callerApp = '';
                toaster.error("error", "Undefined client!");
            }
        };
        $timeout(function () {
            init();
        }, 100);
        //#region scope events
    }
    app.auth.controller('layoutCtrl', layoutCtrl);
})();