(function () {
    'use strict';
    var loginCtrl = function ($scope, $rootScope, $timeout, toaster, clientService, authService) {
        //#region events
        $scope.openContactUsModal = function () {
            $scope.$emit(app.appSettings.APP_EVENTS.openContactSupportModal, {});
        };
        $scope.openForgotPasswordModal = function () {
            $scope.$emit(app.appSettings.APP_EVENTS.openForgotPasswordModal, {});
        };
        $scope.openFAQModal = function () {
            $scope.$emit(app.appSettings.APP_EVENTS.openFAQModal, {});
        };

        $scope.submit = function (authClient) {
            if (authClient && $scope.loginForm.$valid) {
                $timeout(function () {
                    $('#loginBtn').text('Loading...').delay(100).prop('disabled', 'disabled');
                }, 10);
                $scope.serviceCallerUrl = authClient.retUrl == undefined ? '' : $stateParams.retUrl;
                var clientToken = clientService.getClientToken($scope.callerApp);
                $scope.appPromise = authService.login($scope.username, $scope.password, clientToken, $scope.serviceCallerUrl);
                $scope.appPromise.then(function (response) {
                    if (response.data && response.data.error) {
                        toaster.error('', 'Invalid username or password!');
                        $timeout(function () {
                            $('#loginBtn').text('Login').delay(1000).prop('disabled', '');
                        }, 10);
                    }
                    else {
                        // toaster.success('login succeeded!', 'redirect to source application...');
                    }
                }, function (error) {
                    $('#loginBtn').text('Login').delay(100).prop('disabled', '');
                    toaster.error('login failed!', 'Please contact system administrator!');
                });
            }
        }
        $scope.logout = function logout() {
            authService.logout();
        };
        //#end region
    };
    app.auth.controller('loginCtrl', loginCtrl);
    console.log('login Ctrl!');
})();