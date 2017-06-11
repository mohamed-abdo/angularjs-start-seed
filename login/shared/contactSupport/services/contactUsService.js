(function () {
    var contactUsService = function ($http, $log) {
        var urlSrv = 'api/contactus/';
        function formatBody(sender, cc, body) {
            cc = cc == null ? '' : cc;
            var body = '<b>Dear Support -</b> <br/>' +
                'Email from: <b>' + sender + ' </b> <br/>' +
                'Email cc: <b>' + cc + ' </b> <br/>' +
                'Message Body:<br/>' +
                '<b>' + body + ' </b>. <br/>';
            return body;
        }
        return {
            contactUs: function (contactusEmail, sender, cc, body) {
                var contactus = {
                    'contactusEmail': contactusEmail,
                    'body': formatBody(sender, cc, body)
                };
                return $http({
                    method: 'POST',
                    url: urlSrv,
                    data: contactus
                });
            }
        }
    };
    app.auth.factory('contactUsService', contactUsService);
})();