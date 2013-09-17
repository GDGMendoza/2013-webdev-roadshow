var app = angular.module("blog",[]);

app.controller("BlogCtrl", function($scope){
    $scope.postNuevo = {}
    $scope.posts = [{titulo:'Cómo saber si tus colegas son vampiros',contenido:'TODO: Investigar en internet, empezar por Heber'}];
    $scope.agregar = function(){
        $scope.posts.push($scope.postNuevo);
        $scope.postNuevo = {};
    }
});