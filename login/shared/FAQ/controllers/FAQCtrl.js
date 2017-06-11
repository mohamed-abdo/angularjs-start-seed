(function () {
    'use strict';
    var FAQCtrl = function ($scope, $rootScope, $uibModal, $log) {

        $rootScope.$on(app.appSettings.APP_EVENTS.openFAQModal, function (modalResolver) {
            if (!$uibModal.getPromiseChain())
                $scope.open(modalResolver)
        });

        $scope.open = function (modalResolver) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'FAQModal.html',
                controller: 'FAQModalInstanceCtrl',
                size: 'lg',
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
    app.auth.controller('FAQCtrl', FAQCtrl);
    console.log('FAQ Ctrl!');
})();