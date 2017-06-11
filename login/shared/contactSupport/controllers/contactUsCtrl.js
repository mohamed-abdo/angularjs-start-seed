(function () {
    var contactUsCtrl = function ($scope, $rootScope, $uibModal, $log) {

        $rootScope.$on(app.appSettings.APP_EVENTS.openContactSupportModal, function (modalResolver) {
            if (!$uibModal.getPromiseChain())
                $scope.open(modalResolver)
        });

        $scope.open = function (modalResolver) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'contactUsModal.html',
                controller: 'contactUsModalInstanceCtrl',
                size: 'lg',
                resolve: {
                    message: function () {
                        return {
                            messageSender: $scope.messageSender,
                            messageCC: $scope.messageCC,
                            messageBody: $scope.messageBody
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
    app.auth.controller('contactUsCtrl', contactUsCtrl);
    console.log('Contact us Ctrl!');
})();

