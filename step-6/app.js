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

app.controller("BlogCtrl", function($scope){
    $scope.postNuevo = {}
    $scope.posts = [{titulo:'Cómo saber si tus colegas son vampiros',contenido:'TODO: Investigar en internet, empezar por Heber'}];
    $scope.agregar = function(){
        $scope.posts.push($scope.postNuevo);
        $scope.postNuevo = {};
    }
});
app.controller('PostCtrl', function($scope, $routeParams){
    $scope.postId = $routeParams.id;
    $scope.post = $scope.posts[$scope.postId];
});