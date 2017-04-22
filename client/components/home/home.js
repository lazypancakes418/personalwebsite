angular.module('app.home', ['ngMaterial'])
.controller('HomeCTRL',function ($scope, $mdSidenav) {
  $scope.toggleLeft = () => $mdSidenav('left').toggle()
  
});