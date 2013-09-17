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
}
var controlador = new HolaCtrl();
var tuNombre = 'Mundo';
var $tuNombre = $('#tu-nombre').on('keyup',function(){
	tuNombre = $tuNombre.val();
	controlador.actualizarSaludo();
}).val(tuNombre);
var $saludoContainer = $('#saludo-container');
controlador.actualizarSaludo();