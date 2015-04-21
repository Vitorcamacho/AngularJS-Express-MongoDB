(function () {

    var injectParams = ['$scope', 'UserService'];

    var HomeController = function ($scope, UserService) {

    	UserService.get_users().then(function(response){
    		console.log(response);
    	})

    };

    HomeController.$inject = injectParams;

    angular.module('customersApp').controller('HomeController', HomeController);

}());