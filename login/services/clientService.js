(function () {
    'use strict';
    var clientService = function ($http) {
        //constructor
        var clients = [];
        var loadClients = function loadClients() {
            return $http.get(app.appSettings.clientsConfig);
        };
        loadClients().then(function (resposne) {
            clients = resposne.data.clients;
        }, function (error) {
        });;
        //

        function tokenzer(clientId, secretKey) {
            return btoa(clientId + ':' + secretKey);
        };
        return {
            getClientToken: function (clientId) {
                var client = this.getClient(clientId);
                if (client)
                    return tokenzer(clientId, client.clientKey);
                else
                    return null;
            },
            getClientSubTitle: function (clientId) {
                var client = this.getClient(clientId);
                if (client)
                    return client.subTitle;
                else
                    return null;
            },
            getClient: function (clientId) {
                return _.find(clients, function (client) {
                    return client.clientId == clientId;
                });
            }
        };
    };
    app.auth.factory('clientService', clientService);
})();