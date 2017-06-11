(function () {
    'use strict';
    var contactUsModalInstanceCtrl = function ($scope, contactUsService, $log, $uibModalInstance, message, toaster) {
        $scope.messageSender = message.messageSender;
        $scope.messageCC = message.messageCC;
        $scope.messageBody = message.messageBody;
        var contactusEmail = app.appSettings.contactusEmail;
        $scope.send = function (handler) {
            if ($scope.contactsupportFrm.$valid) {
                //sending stuff
                contactUsService.contactUs(contactusEmail, $scope.messageSender, $scope.messageCC, $scope.messageBody).then(function (success) {
                    toaster.success('Email has been sent', success.data);
                }, function (error) {
                    toaster.error('error!', error.data);
                });
                $uibModalInstance.close({
                    messageSender: $scope.messageSender,
                    messageCC: $scope.messageCC,
                    messageBody: $scope.messageBody
                });
            }
            $log.info($modalInstance);
        };
        $scope.cancel = function (message) {
            $uibModalInstance.dismiss(message);
        };
    };
    app.auth.controller('contactUsModalInstanceCtrl', contactUsModalInstanceCtrl);
})();
