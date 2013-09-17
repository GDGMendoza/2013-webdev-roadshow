var app = angular.module("blog", []);
app.config(function($routeProvider, $httpProvider){
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    $routeProvider.when('/', {
        templateUrl: 'blog.html',
        controller: 'BlogCtrl',
        resolve: {
            datos: function($q, postService){
                var defer = $q.defer();
                postService.traerPosts().then(function(response){
                    defer.resolve(response.data);
                });
                return defer.promise;
            }
        }
    }).when('/post/:id', {
        templateUrl: 'post.html',
        controller: 'PostCtrl',
        resolve: {
            datos: function($q, $route, $timeout, postService){
                var defer = $q.defer();
                $timeout(function () {
                    postService.traerPost($route.current.params.id).then(function(response){
                        defer.resolve(response.data);
                    });
                }, 1000);
                return defer.promise;
            }
        }
    });
});

app.controller("BlogCtrl", function($scope, postService, datos){
    $scope.posts = datos;
    $scope.postNuevo = {};
    $scope.actualizar = function(){
        postService.traerPosts().success(function(data){
            $scope.posts = data;
        });
    };
    $scope.agregar = function(){
        postService.crearPost($scope.postNuevo).then(function(){
            $scope.postNuevo = {};
            $scope.actualizar();
        });
    };
});
app.controller('PostCtrl', function($scope, datos){
    $scope.post = datos;
});

app.service('postService', function($http){
    this.crearPost = function(postNuevo){
        return $http.post('../php/insertar.php', {
            'titulo': postNuevo.titulo, 
            'contenido': postNuevo.contenido
        });
    };
    this.traerPosts = function(){
        return $http.post('../php/datos.php');
    };
    this.traerPost = function(postId){
        return $http.post('../php/datos.php', {
            'id': postId
        });
    };
});