(function () {

    var injectParams = ['$location', '$routeParams'];

    var LoginController = function ($location, $routeParams) {
        
    };

    LoginController.$inject = injectParams;

    angular.module('customersApp')
        .controller('LoginController', LoginController);

}());