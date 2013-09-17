'use strict';
function ListadoPostCtrl(){
  var self = this;
  this.mostrar = function() {
    $contenedorGlobal.children().remove();
    $contenedorGlobal.append($vistaUno);
    $tituloForm.val('');
    $contenidoForm.val('');
    $agregarForm.click(function(e){
      e.preventDefault();
      postNuevo.titulo = $tituloForm.val();
      postNuevo.contenido = $contenidoForm.val();
      self.agregar();
    });
    self.actualizarPosts();
  }
  this.actualizarPosts = function(){
    $listadoPosts.find('.post').remove();
    for(var i = 0; i < posts.length; i++){
      var aux = $plantillaPost.clone();
      aux.find('a')
          .text(posts[i].titulo)
          .attr('data-posicion', i)
          .click(function(e){
            e.preventDefault();
            detalleController.mostrar($(this).attr('data-posicion'));
          });
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
function DetallePostCtrl(){
  var self = this;
  this.mostrar = function(posicion){
    $contenedorGlobal.children().remove();
    $contenedorGlobal.append($detallePost);
    $detallePost.find('#titulo').text(posts[posicion].titulo);
    $detallePost.find('#contenido').text(posts[posicion].contenido);
    $detallePost.find('#volver').click(function(e){
      e.preventDefault();
      listadoController.mostrar();
    });
  }
}
var listadoController = new ListadoPostCtrl();
var detalleController = new DetallePostCtrl();
var $contenedorGlobal = $('div.container-fluid');
var $vistaUno = $contenedorGlobal.find('#vista-uno').remove();
var $detallePost = $contenedorGlobal.find('#detalle-post').remove();
var $listadoPosts = $vistaUno.find('#listado-posts');
var $plantillaPost = $listadoPosts.find('.post').remove();
var $tituloForm = $vistaUno.find('#titulo-nuevo');
var $contenidoForm = $vistaUno.find('#contenido-nuevo');
var $agregarForm = $vistaUno.find('#agregar-post');
var postNuevo = {};
var posts = [{'titulo':'Cómo saber si tus colegas son vampiros', 'contenido':'TODO: Investigar en internet, empezar por Heber'}];
listadoController.mostrar();