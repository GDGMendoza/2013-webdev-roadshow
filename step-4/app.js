'use strict';
var app = angular.module("blog",[]);

app.controller("BlogCtrl", function($scope){
	$scope.postNuevo = {'titulo':'Cómo saber si tus colegas son vampiros', 'contenido':'TODO: Investigar en internet, empezar por Heber'};
	$scope.agregar = function(){
		alert('Este es mi contenido: ' + $scope.postNuevo.contenido + '!');
	}
});