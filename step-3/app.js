'use strict';
var app = angular.module("holaMundo", []);

app.controller("HolaCtrl", function($scope){
    $scope.tuNombre = "Mundo";
    $scope.saludar = function(){
        alert('Ola k ase ' + $scope.tuNombre + '!');
    }
});