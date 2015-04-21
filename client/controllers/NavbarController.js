(function () {

    var injectParams = ['$scope', '$location'];

    var NavbarController = function ($scope, $location) {
    	
    	$scope.highlight = function (path) {
            return $location.path().substr(0, path.length) === path;
        };

        


    };

    NavbarController.$inject = injectParams;

    angular.module('customersApp').controller('NavbarController', NavbarController);

}());
