var app = angular.module("loginApplication", []);
app.controller("LoginController", ['$scope', function ($scope) {
    var init = function () {
        console.log("Hello World");
    };
    $scope.submit = function () {
        console.log($scope.name);
        console.log($scope.password);
    };

    init();
}]);