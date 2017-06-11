(function () {
    'use strict';
    var forgotPasswordModalInstanceCtrl = function ($scope, $log, $uibModalInstance, message, toaster) {
        $scope.cancel = function (message) {
            $uibModalInstance.dismiss(message);
        };
    };
    app.auth.controller('forgotPasswordModalInstanceCtrl', forgotPasswordModalInstanceCtrl);
})();
