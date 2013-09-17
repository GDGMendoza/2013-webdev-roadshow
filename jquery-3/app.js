'use strict';
function HolaCtrl(){
    var self = this;
    this.actualizarSaludo = function(){
        if(tuNombre){
            $saludoContainer.html("Ola k ase " + tuNombre + "!").show();
        } else {
            $saludoContainer.hide();
        }
    }
    this.saludar = function(){
        alert('Ola k ase ' + tuNombre + '!');
    }
}
var controlador = new HolaCtrl();
var tuNombre = 'Mundo';
var $tuNombre = $('#tu-nombre').on('keyup', function(){
    tuNombre = $tuNombre.val();
    controlador.actualizarSaludo();
}).val(tuNombre);
var $saludoContainer = $('#saludo-container');
var $miBoton = $('#mi-boton').click(controlador.saludar);
controlador.actualizarSaludo();