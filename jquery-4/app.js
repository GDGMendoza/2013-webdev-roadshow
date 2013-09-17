'use strict';
function BlogCtrl(){
    var self = this;
    this.agregar = function(){
        alert('Este es mi contenido: ' + postNuevo.contenido + '!');
    }
    this.actualizarTitulo = function(){
        $titulo.html(postNuevo.titulo);
    }
}
var blog = new BlogCtrl();
var postNuevo = {'titulo':'Cómo saber si tus colegas son vampiros', 'contenido':'TODO: Investigar en internet, empezar por Heber'};

var $titulo = $('#titulo');
var $tituloNuevo = $('#titulo-nuevo').on('keyup', function(){
    postNuevo.titulo = $tituloNuevo.val();
    blog.actualizarTitulo();
}).val(postNuevo.titulo);
var $contenidoNuevo = $('#contenido-nuevo').val(postNuevo.contenido);

var $agregarPost = $('#agregar-post').click(function(e){
    postNuevo.contenido = $contenidoNuevo.val();
    blog.agregar();
});

blog.actualizarTitulo();