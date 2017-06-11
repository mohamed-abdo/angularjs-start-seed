(function () {
    'use strict';
    var FAQModalInstanceCtrl = function ($scope, $log, $uibModalInstance, message, toaster) {
        $scope.cancel = function (message) {
            $uibModalInstance.dismiss(message);
        };
    };
    app.auth.controller('FAQModalInstanceCtrl', FAQModalInstanceCtrl);
})();
