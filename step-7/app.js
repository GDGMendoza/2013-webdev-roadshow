var app = angular.module("blog", []);
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'blog.html',
        controller: 'BlogCtrl'})
    .when('/post/:id', {
        templateUrl: 'post.html',
        controller: 'PostCtrl'});
});

app.controller("BlogCtrl", function($scope, postList){
    $scope.postNuevo = {}
    $scope.posts = postList;
    $scope.agregar = function(){
        $scope.posts.push($scope.postNuevo);
        $scope.postNuevo = {};
    }
});
app.controller('PostCtrl', function($scope, $routeParams, postList){
    $scope.postId = $routeParams.id;
    $scope.posts = postList;
    $scope.post = $scope.posts[$scope.postId];
});

app.factory('postList', function(){
    return [{titulo:'Cómo saber si tus colegas son vampiros',contenido:'TODO: Investigar en internet, empezar por Heber'}];
});