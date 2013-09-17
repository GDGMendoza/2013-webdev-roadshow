'use strict';
function BlogCtrl(){
  var self = this;
  this.actualizarPosts = function(){
    $listadoPosts.find('.post').remove();
    for(var i = 0; i < posts.length; i++){
      var aux = $plantillaPost.clone();
      aux.find('a').text(posts[i].titulo);
      $listadoPosts.append(aux);
    }
  }
  this.agregar = function(){
    posts.push(postNuevo);
    postNuevo = {};
    $tituloForm.val('');
    $contenidoForm.val('');
    self.actualizarPosts();
  }
}
var blog = new BlogCtrl();
var $listadoPosts = $('#listado-posts');
var $detallePost = $('#form-post');
var $plantillaPost = $listadoPosts.find('.post').remove();
var $tituloForm = $detallePost.find('#titulo-nuevo');
var $contenidoForm = $detallePost.find('#contenido-nuevo');
var $agregarForm = $detallePost.find('#agregar-post').click(function(e){
  e.preventDefault();
  postNuevo.titulo = $tituloForm.val();
  postNuevo.contenido = $contenidoForm.val();
  blog.agregar();
});
var postNuevo = {};
var posts = [{'titulo':'Cómo saber si tus colegas son vampiros', 'contenido':'TODO: Investigar en internet, empezar por Heber'}];
blog.actualizarPosts();