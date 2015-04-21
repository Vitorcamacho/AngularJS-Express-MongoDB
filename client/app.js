(function () {

    var app = angular.module('customersApp',
        ['ngRoute', 'ui.bootstrap']);

    app.config(['$routeProvider', function ($routeProvider) {
        var viewBase = 'client/views/';

        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: viewBase + 'home.html'
            })
            .when('/clients', {
                controller: 'ClientsController',
                templateUrl: viewBase + 'clients/clients.html'
            })
            .when('/orders', {
                controller: 'HomeController',
                templateUrl: viewBase + 'home.html'
            })
            .when('/about', {
                controller: 'AboutController',
                templateUrl: viewBase + 'home.html'
            })
            .otherwise({ redirectTo: '/' });

    }]);

}());

