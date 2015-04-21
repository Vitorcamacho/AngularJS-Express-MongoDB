(function () {

    var injectParams = ['$http', '$rootScope'];

    var UserService = function ($http, $rootScope) {
        var base = '//localhost:3000/'
            factory = {};

        factory.get_users = function () {
            return $http.get(base+"users/list").then(
                function (results) {
                    return results;
                }); 
        }

        return factory;
    };

    UserService.$inject = injectParams;

    angular.module('customersApp').factory('UserService', UserService);

}());

