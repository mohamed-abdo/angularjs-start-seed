(function () {
    'use strict';
    var forgotPasswordCtrl = function ($scope, $rootScope, $uibModal, $log) {

        $rootScope.$on(app.appSettings.APP_EVENTS.openForgotPasswordModal, function (modalResolver) {
            if (!$uibModal.getPromiseChain())
                $scope.open(modalResolver)
        });

        $scope.open = function (modalResolver) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'forgotPasswordModal.html',
                controller: 'forgotPasswordModalInstanceCtrl',
                size: '',
                resolve: {
                    message: function () {
                        return {
                        }
                    }
                }
            });
            modalInstance.result.then(function (resolver) {
                //trace if sending succeed, show toaster
                $log.info(resolver);
            }, function (dissmiss) {
                $log.info(dissmiss);
            });
        };

    };
    app.auth.controller('forgotPasswordCtrl', forgotPasswordCtrl);
    console.log('forgot Password Ctrl!');
})();