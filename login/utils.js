(function () {
    'use strict';
    var utils = function () {
        return {
            capitalizeFirstLetter: function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        }
    }
    app.auth.factory("utils", utils);
})();