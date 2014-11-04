console.log('testing');
var demoApp = angular.module('demoApp', []);

demoApp.controller('main', function($scope, $http){
    $scope.user = {};

    $scope.submit = function(){
        $http({
            method : 'POST',
            url : '/sign-up',
            data : $scope.user
        });
    }
});
